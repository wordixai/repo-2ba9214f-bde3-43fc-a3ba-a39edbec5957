import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Avatar, Badge, Card, Button as AntButton, Typography, Space, Row, Col } from 'antd';
import { 
  Bell, 
  Search, 
  Home, 
  Heart, 
  ShoppingBag, 
  User, 
  Plus,
  Star,
  MapPin,
  Clock,
  ChevronRight,
  Zap,
  TrendingUp,
  Gift
} from 'lucide-react';

const { Title, Text } = Typography;

interface TabItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}

const tabs: TabItem[] = [
  { id: 'home', label: 'Home', icon: <Home size={20} /> },
  { id: 'favorites', label: 'Favorites', icon: <Heart size={20} /> },
  { id: 'shop', label: 'Shop', icon: <ShoppingBag size={20} /> },
  { id: 'profile', label: 'Profile', icon: <User size={20} /> },
];

const mockData = {
  user: {
    name: 'Sarah Chen',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b25d9b63?w=400&auto=format&fit=crop&q=60',
    location: 'San Francisco',
  },
  featuredItems: [
    {
      id: 1,
      title: 'Premium Coffee Blend',
      image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&auto=format&fit=crop&q=60',
      price: '$24.99',
      rating: 4.8,
      category: 'Coffee'
    },
    {
      id: 2,
      title: 'Artisan Pastries',
      image: 'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=400&auto=format&fit=crop&q=60',
      price: '$12.50',
      rating: 4.9,
      category: 'Bakery'
    },
  ],
  quickActions: [
    { id: 1, title: 'Flash Sale', icon: <Zap className="text-yellow-500" size={24} />, badge: '50% OFF' },
    { id: 2, title: 'Trending', icon: <TrendingUp className="text-green-500" size={24} />, badge: 'NEW' },
    { id: 3, title: 'Rewards', icon: <Gift className="text-purple-500" size={24} />, badge: '2x Points' },
  ],
  recentActivity: [
    { id: 1, title: 'Morning Coffee Order', time: '2 hours ago', status: 'delivered' },
    { id: 2, title: 'Lunch Special', time: '1 day ago', status: 'completed' },
  ]
};

const MobileApp: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');

  const renderHeader = () => (
    <div className="mobile-header">
      <div className="flex items-center justify-between px-4 h-16">
        <div className="flex items-center space-x-3">
          <Avatar 
            src={mockData.user.avatar} 
            size={40}
            className="ring-2 ring-white/20"
          />
          <div>
            <Text className="text-sm font-medium block text-foreground">
              Good morning
            </Text>
            <Text className="text-lg font-bold block text-foreground">
              {mockData.user.name}
            </Text>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <motion.div 
            whileTap={{ scale: 0.95 }}
            className="touch-target"
          >
            <div className="p-2 rounded-full bg-secondary/50">
              <Search size={20} className="text-foreground" />
            </div>
          </motion.div>
          <motion.div 
            whileTap={{ scale: 0.95 }}
            className="touch-target relative"
          >
            <div className="p-2 rounded-full bg-secondary/50">
              <Bell size={20} className="text-foreground" />
            </div>
            <Badge 
              count={3} 
              size="small" 
              className="absolute -top-1 -right-1"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );

  const renderQuickActions = () => (
    <div className="mb-6">
      <Title level={5} className="mb-4 text-foreground">Quick Actions</Title>
      <Row gutter={[12, 12]}>
        {mockData.quickActions.map((action) => (
          <Col span={8} key={action.id}>
            <motion.div
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <Card 
                className="glass-card border-0 text-center relative overflow-hidden"
                bodyStyle={{ padding: '20px 12px' }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
                <div className="relative z-10">
                  <div className="mb-2 flex justify-center">
                    {action.icon}
                  </div>
                  <Text className="text-sm font-medium block text-foreground">
                    {action.title}
                  </Text>
                  <Badge 
                    count={action.badge} 
                    style={{ 
                      backgroundColor: 'hsl(var(--primary))',
                      fontSize: '10px',
                      height: '18px',
                      lineHeight: '18px',
                      borderRadius: '9px',
                      marginTop: '4px'
                    }}
                  />
                </div>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </div>
  );

  const renderFeaturedItems = () => (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-4">
        <Title level={5} className="mb-0 text-foreground">Featured Today</Title>
        <Text className="text-primary font-medium">See all</Text>
      </div>
      <div className="space-y-4">
        {mockData.featuredItems.map((item) => (
          <motion.div
            key={item.id}
            whileTap={{ scale: 0.98 }}
            className="animate-slide-up"
          >
            <Card 
              className="glass-card border-0 overflow-hidden"
              bodyStyle={{ padding: 0 }}
            >
              <div className="flex">
                <div 
                  className="w-24 h-24 bg-cover bg-center flex-shrink-0"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <div className="flex-1 p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <Text className="font-semibold block text-foreground">
                        {item.title}
                      </Text>
                      <Text className="text-sm text-muted-foreground">
                        {item.category}
                      </Text>
                    </div>
                    <ChevronRight size={16} className="text-muted-foreground mt-1" />
                  </div>
                  <div className="flex items-center justify-between">
                    <Text className="font-bold text-lg text-primary">
                      {item.price}
                    </Text>
                    <div className="flex items-center space-x-1">
                      <Star size={14} className="text-yellow-500 fill-current" />
                      <Text className="text-sm font-medium text-foreground">
                        {item.rating}
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const renderRecentActivity = () => (
    <div className="mb-6">
      <Title level={5} className="mb-4 text-foreground">Recent Activity</Title>
      <div className="space-y-3">
        {mockData.recentActivity.map((activity) => (
          <Card 
            key={activity.id}
            className="glass-card border-0"
            bodyStyle={{ padding: '16px' }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <div>
                  <Text className="font-medium block text-foreground">
                    {activity.title}
                  </Text>
                  <div className="flex items-center space-x-1 mt-1">
                    <Clock size={12} className="text-muted-foreground" />
                    <Text className="text-sm text-muted-foreground">
                      {activity.time}
                    </Text>
                  </div>
                </div>
              </div>
              <Badge 
                status="success" 
                text={activity.status}
                className="capitalize"
              />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderFloatingActionButton = () => (
    <motion.div
      className="fixed bottom-24 right-6 z-40"
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.1 }}
    >
      <div className="w-14 h-14 gradient-bg rounded-full shadow-lg flex items-center justify-center">
        <Plus size={24} className="text-white" />
      </div>
    </motion.div>
  );

  const renderBottomNavigation = () => (
    <div className="mobile-bottom-nav">
      <div className="flex items-center justify-around h-20 px-4">
        {tabs.map((tab) => (
          <motion.button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex flex-col items-center space-y-1 touch-target ${
              activeTab === tab.id ? 'text-primary' : 'text-muted-foreground'
            }`}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              animate={activeTab === tab.id ? { scale: 1.1 } : { scale: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {tab.icon}
            </motion.div>
            <Text 
              className={`text-xs font-medium ${
                activeTab === tab.id ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              {tab.label}
            </Text>
            {activeTab === tab.id && (
              <motion.div
                className="w-1 h-1 bg-primary rounded-full"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            )}
          </motion.button>
        ))}
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <div className="space-y-6">
            <div className="flex items-center space-x-2 mb-6">
              <MapPin size={16} className="text-muted-foreground" />
              <Text className="text-muted-foreground">{mockData.user.location}</Text>
            </div>
            {renderQuickActions()}
            {renderFeaturedItems()}
            {renderRecentActivity()}
          </div>
        );
      case 'favorites':
        return (
          <div className="text-center py-12">
            <Heart size={48} className="text-muted-foreground mx-auto mb-4" />
            <Title level={4} className="text-foreground">Your Favorites</Title>
            <Text className="text-muted-foreground">Items you love will appear here</Text>
          </div>
        );
      case 'shop':
        return (
          <div className="text-center py-12">
            <ShoppingBag size={48} className="text-muted-foreground mx-auto mb-4" />
            <Title level={4} className="text-foreground">Shop</Title>
            <Text className="text-muted-foreground">Browse our amazing collection</Text>
          </div>
        );
      case 'profile':
        return (
          <div className="text-center py-12">
            <User size={48} className="text-muted-foreground mx-auto mb-4" />
            <Title level={4} className="text-foreground">Profile</Title>
            <Text className="text-muted-foreground">Manage your account settings</Text>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="mobile-container">
      {renderHeader()}
      <div className="mobile-content">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </div>
      {renderFloatingActionButton()}
      {renderBottomNavigation()}
    </div>
  );
};

export default MobileApp;