import React from 'react';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';
import { Link } from 'react-router-dom';

const BlogPreview = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-12">
          <SectionHeading title="Latest Insights" subtitle="From Our Blog" />
          <Button variant="outline" to="/blog" className="mb-12">Read All Articles</Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1,2,3].map(i => (
            <Link to="/blog/article-slug" key={i} className="group flex flex-col">
              <div className="aspect-[16/10] bg-muted rounded-xl mb-4 overflow-hidden relative">
                <div className="absolute inset-0 bg-primary/5 group-hover:scale-105 transition-transform duration-500"></div>
              </div>
              <span className="text-sm font-medium text-muted-foreground mb-2">Development • Oct 12, 2026</span>
              <h3 className="text-xl font-bold group-hover:text-primary transition-colors">The Future of React Configuration with Vite</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
export default BlogPreview;
