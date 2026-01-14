import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { INSTAGRAM_POSTS } from '../../constants';
import { InstagramPost } from '../../types';
import { Heart, MessageCircle, Instagram, ArrowRight, Loader } from 'lucide-react';

const InstagramFeed = () => {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);

  // Configuration for Instagram Basic Display API
  // Token needs to be generated via Facebook Developers Console
  const INSTAGRAM_TOKEN = ''; // Leave empty for demo

  useEffect(() => {
    const fetchInstagramPosts = async () => {
      setLoading(true);
      if (!INSTAGRAM_TOKEN) {
        setTimeout(() => {
          setPosts(INSTAGRAM_POSTS);
          setLoading(false);
        }, 1200);
        return;
      }

      try {
        const response = await fetch(
          `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&access_token=${INSTAGRAM_TOKEN}`
        );
        
        if (!response.ok) throw new Error('Failed to fetch Instagram posts');
        
        const data = await response.json();
        
        // Filter for Images or Carousel Albums (exclude generic VIDEOs which go to Reel section)
        const fetchedPosts: InstagramPost[] = data.data
          .filter((item: any) => item.media_type === 'IMAGE' || item.media_type === 'CAROUSEL_ALBUM')
          .slice(0, 4)
          .map((item: any) => ({
            id: item.id,
            image: item.media_url,
            caption: item.caption || '',
            likes: '2k+', // Basic API doesn't always return likes without specific permissions
            comments: '100+', 
            link: item.permalink,
            media_type: item.media_type
          }));

        setPosts(fetchedPosts.length > 0 ? fetchedPosts : INSTAGRAM_POSTS);
      } catch (error) {
        console.error("Instagram Fetch Error:", error);
        setPosts(INSTAGRAM_POSTS);
      } finally {
        setLoading(false);
      }
    };

    fetchInstagramPosts();
  }, []);

  return (
    <section className="py-24 relative overflow-hidden">
        {/* Background gradient/blob */}
        <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <motion.div 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               className="flex items-center gap-2 text-secondary mb-2"
            >
               <Instagram size={18} />
               <span className="font-medium tracking-wider uppercase text-sm">@shripal_gandhi</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-display font-bold"
            >
              Beyond the Boardroom
            </motion.h2>
          </div>
          
          <motion.a 
             href="https://www.instagram.com/shripal_gandhi/"
             target="_blank"
             rel="noopener noreferrer"
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             className="px-6 py-3 rounded-full border border-white/10 hover:bg-white/5 transition-colors flex items-center gap-2 text-sm font-medium"
          >
            Follow Journey <ArrowRight size={16} />
          </motion.a>
        </div>

        {loading ? (
            <div className="h-64 flex items-center justify-center w-full">
                <Loader className="animate-spin text-secondary" />
            </div>
        ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {posts.map((post, index) => (
                <motion.a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={post.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative aspect-square rounded-2xl overflow-hidden block bg-white/5"
                >
                  <img 
                    src={post.image} 
                    alt="Instagram Post" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-6 text-center">
                     <p className="text-white text-sm line-clamp-3 mb-4 font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        {post.caption}
                     </p>
                     <div className="flex items-center gap-6 text-white/80 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                        <div className="flex items-center gap-1">
                            <Heart size={18} fill="currentColor" />
                            <span className="font-bold text-sm">{post.likes}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <MessageCircle size={18} fill="currentColor" />
                            <span className="font-bold text-sm">{post.comments}</span>
                        </div>
                     </div>
                  </div>
                </motion.a>
              ))}
            </div>
        )}
      </div>
    </section>
  );
};

export default InstagramFeed;