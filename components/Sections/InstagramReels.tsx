import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { INSTAGRAM_REELS } from '../../constants';
import { InstagramReel } from '../../types';
import { Play, Heart, MessageCircle, Instagram, Loader } from 'lucide-react';
import GlassCard from '../UI/GlassCard';

const InstagramReels = () => {
  const [reels, setReels] = useState<InstagramReel[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Reuse the same token for Reels
  const INSTAGRAM_TOKEN = ''; 

  useEffect(() => {
    const fetchReels = async () => {
      setLoading(true);
      if (!INSTAGRAM_TOKEN) {
        setTimeout(() => {
          setReels(INSTAGRAM_REELS);
          setLoading(false);
        }, 1500);
        return;
      }

      try {
        const response = await fetch(
          `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&access_token=${INSTAGRAM_TOKEN}`
        );
        
        if (!response.ok) throw new Error('Failed to fetch Instagram reels');
        
        const data = await response.json();
        
        // Filter strictly for VIDEO media type
        const fetchedReels: InstagramReel[] = data.data
          .filter((item: any) => item.media_type === 'VIDEO')
          .slice(0, 4)
          .map((item: any) => ({
            id: item.id,
            // For videos, 'thumbnail_url' is the cover image. 'media_url' is the video file itself.
            thumbnail: item.thumbnail_url || item.media_url, 
            caption: item.caption || '',
            likes: '5k+', 
            comments: '200+', 
            link: item.permalink,
            views: '10k+'
          }));

        setReels(fetchedReels.length > 0 ? fetchedReels : INSTAGRAM_REELS);
      } catch (error) {
        console.error("Instagram Reels Fetch Error:", error);
        setReels(INSTAGRAM_REELS);
      } finally {
        setLoading(false);
      }
    };

    fetchReels();
  }, []);

  return (
    <section id="reels" className="py-24 relative bg-black/40">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
            <motion.div 
               initial={{ opacity: 0, y: 10 }}
               whileInView={{ opacity: 1, y: 0 }}
               className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-500 text-xs font-bold uppercase tracking-wider mb-4"
            >
                <Instagram size={12} /> Trending
            </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-display font-bold"
          >
            Popular Reels
          </motion.h2>
          <p className="text-gray-400 mt-4">Short-form strategies for quick wins.</p>
        </div>

        {loading ? (
             <div className="h-96 flex items-center justify-center w-full">
                <Loader className="animate-spin text-pink-500" size={32} />
            </div>
        ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reels.map((reel, index) => (
                <motion.div
                key={reel.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                >
                <a href={reel.link} target="_blank" rel="noopener noreferrer" className="group block h-full">
                    <div className="relative aspect-[9/16] rounded-2xl overflow-hidden border border-white/5 bg-white/5">
                        <img 
                            src={reel.thumbnail} 
                            alt="Reel Thumbnail" 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90" />

                        {/* Play Icon */}
                        <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center border border-white/10 group-hover:bg-white group-hover:text-black transition-colors duration-300">
                            <Play size={14} fill="currentColor" />
                        </div>

                        {/* Content */}
                        <div className="absolute bottom-0 left-0 right-0 p-5">
                            <div className="flex items-center gap-4 text-white/90 text-sm font-medium mb-3">
                                <div className="flex items-center gap-1.5">
                                    <Play size={14} /> {reel.views}
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <Heart size={14} /> {reel.likes}
                                </div>
                            </div>
                            <p className="text-white text-sm line-clamp-2 leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity">
                                {reel.caption}
                            </p>
                        </div>
                    </div>
                </a>
                </motion.div>
            ))}
            </div>
        )}
      </div>
    </section>
  );
};

export default InstagramReels;