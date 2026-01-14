import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { YOUTUBE_VIDEOS } from '../../constants';
import { YouTubeVideo } from '../../types';
import { Play, ArrowRight, Youtube, Loader, AlertCircle } from 'lucide-react';
import GlassCard from '../UI/GlassCard';

const YouTubeFeed = () => {
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Configuration for YouTube API
  // Note: For a production app, these should be in environment variables
  const API_KEY = ''; // Leave empty to use fallback data for demo
  const CHANNEL_ID = 'UC_PLACEHOLDER_CHANNEL_ID'; // Replace with actual Channel ID

  useEffect(() => {
    const fetchVideos = async () => {
      setLoading(true);
      setError(null);

      // Check if API key is configured
      if (!API_KEY) {
        // Fallback to static data for demo/portfolio purposes
        // Simulating network delay for realism
        setTimeout(() => {
          setVideos(YOUTUBE_VIDEOS);
          setLoading(false);
        }, 1500);
        return;
      }

      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=3&type=video`
        );

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error?.message || 'Failed to fetch videos');
        }

        const data = await response.json();

        const fetchedVideos: YouTubeVideo[] = data.items.map((item: any) => {
          // Attempt to get the highest quality thumbnail available
          const thumbnail = item.snippet.thumbnails.maxres?.url || 
                           item.snippet.thumbnails.high?.url || 
                           item.snippet.thumbnails.medium?.url;

          return {
            id: item.id.videoId,
            title: item.snippet.title,
            description: item.snippet.description,
            thumbnail: thumbnail,
            link: `https://www.youtube.com/watch?v=${item.id.videoId}`
          };
        });

        setVideos(fetchedVideos);
      } catch (err: any) {
        console.error("YouTube API Error:", err);
        setError("Unable to connect to YouTube. Displaying curated videos.");
        // Fallback to static data so the section doesn't collapse
        setVideos(YOUTUBE_VIDEOS); 
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  return (
    <section id="videos" className="py-24 relative bg-black">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-primary font-medium tracking-wider uppercase text-sm"
            >
              Knowledge Hub
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-display font-bold mt-4"
            >
              Latest Insights & <br className="hidden md:block" /> Masterclasses
            </motion.h2>
          </div>
          
          <motion.a 
             href="https://www.youtube.com/@ShripalGandhicoach"
             target="_blank"
             rel="noopener noreferrer"
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             className="flex items-center gap-2 text-white hover:text-primary transition-colors group"
          >
            <Youtube size={20} />
            <span className="font-medium">View Channel</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>

        {loading ? (
          <div className="flex flex-col justify-center items-center h-64 gap-4">
            <Loader className="animate-spin text-primary" size={40} />
            <p className="text-gray-500 text-sm tracking-wider uppercase">Loading Content...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <GlassCard className="h-full !p-0 overflow-hidden flex flex-col group cursor-pointer" hoverEffect={true}>
                  <a href={video.link} target="_blank" rel="noopener noreferrer" className="block relative aspect-video overflow-hidden">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-black transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-100">
                        <Play fill="currentColor" size={24} className="ml-1" />
                      </div>
                    </div>
                    {/* Badge for the most recent video if data is live */}
                    {index === 0 && API_KEY && (
                      <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium text-white">
                        New
                      </div>
                    )}
                  </a>
                  
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {video.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                      {video.description}
                    </p>
                    
                    <a 
                      href={video.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-bold text-white uppercase tracking-wide group/link"
                    >
                      Watch Now
                      <ArrowRight size={14} className="text-primary group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
            
            {error && videos.length > 0 && (
               <div className="col-span-full text-center py-4">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                    <AlertCircle size={14} />
                    <span>{error}</span>
                  </div>
               </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default YouTubeFeed;