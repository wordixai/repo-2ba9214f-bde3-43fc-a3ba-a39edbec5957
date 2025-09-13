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
  Gift,
  Sparkles,
  Crown,
  Flame
} from 'lucide-react';

const { Title, Text } = Typography;

interface TabItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}

const tabs: TabItem[] = [
  { id: 'home', label: '首页', icon: <Home size={20} /> },
  { id: 'favorites', label: '收藏', icon: <Heart size={20} /> },
  { id: 'shop', label: '商城', icon: <ShoppingBag size={20} /> },
  { id: 'profile', label: '我的', icon: <User size={20} /> },
];

const mockData = {
  user: {
    name: '小美同学',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b25d9b63?w=400&auto=format&fit=crop&q=60',
    location: '北京·朝阳区',
  },
  featuredItems: [
    {
      id: 1,
      title: '精品手冲咖啡豆',
      image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&auto=format&fit=crop&q=60',
      price: '¥128',
      originalPrice: '¥188',
      rating: 4.9,
      category: '咖啡',
      discount: '限时特惠'
    },
    {
      id: 2,
      title: '法式手工甜点',
      image: 'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=400&auto=format&fit=crop&q=60',
      price: '¥58',
      originalPrice: '¥78',
      rating: 4.8,
      category: '烘焙',
      discount: '新品上市'
    },
  ],
  quickActions: [
    { 
      id: 1, 
      title: '限时抢购', 
      icon: <Flame className="text-red-500" size={24} />, 
      badge: '5折起',
      gradient: 'from-red-400 to-pink-500'
    },
    { 
      id: 2, 
      title: '热门推荐', 
      icon: <TrendingUp className="text-emerald-500" size={24} />, 
      badge: '爆款',
      gradient: 'from-emerald-400 to-teal-500'
    },
    { 
      id: 3, 
      title: '会员特权', 
      icon: <Crown className="text-amber-500" size={24} />, 
      badge: 'VIP',
      gradient: 'from-amber-400 to-orange-500'
    },
  ],
  recentActivity: [
    { id: 1, title: '早餐咖啡订单', time: '2小时前', status: '已送达', statusColor: 'success' },
    { id: 2, title: '午餐特惠套餐', time: '1天前', status: '已完成', statusColor: 'default' },
  ]
};

const MobileApp: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');

  const renderHeader = () => (
    <div className="mobile-header">
      <div className="flex items-center justify-between px-6 h-16">
        <div className="flex items-center space-x-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Avatar 
              src={mockData.user.avatar} 
              size={44}
              className="ring-2 ring-purple-200 dark:ring-purple-700"
            />
          </motion.div>
          <div>
            <Text className="text-sm text-muted-foreground block">
              早上好 ☀️
            </Text>
            <Text className="text-lg font-bold text-foreground block">
              {mockData.user.name}
            </Text>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <motion.div 
            whileTap={{ scale: 0.9 }}
            className="touch-target"
          >
            <div className="p-3 rounded-2xl bg-white/80 dark:bg-gray-800/80 shadow-lg">
              <Search size={20} className="text-gray-600 dark:text-gray-300" />
            </div>
          </motion.div>
          <motion.div 
            whileTap={{ scale: 0.9 }}
            className="touch-target relative"
          >
            <div className="p-3 rounded-2xl bg-white/80 dark:bg-gray-800/80 shadow-lg">
              <Bell size={20} className="text-gray-600 dark:text-gray-300" />
            </div>
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-red-400 to-pink-500 rounded-full flex items-center justify-center">
              <Text className="text-white text-xs font-bold">3</Text>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );

  const renderQuickActions = () => (
    <div className="mb-8">
      <Title level={4} className="mb-5 text-foreground font-bold">
        <Sparkles className="inline mr-2 text-purple-500" size={20} />
        快捷服
      </Title>
      <Row gutter={[16, 16]}>
        {mockData.quickActions.map((action, index) => (
          <Col span={8} key={action.id}>
            <motion.div
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="action-card"
            >
              <Card 
                className="glass-card border-0 text-center relative overflow-hidden h-24"
                bodyStyle={{ padding: '16px 8px' }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${action.gradient} opacity-5`} />
                <div className="relative z-10 h-full flex flex-col justify-center">
                  <div className="mb-2 flex justify-center">
                    {action.icon}
                  </div>
                  <Text className="text-xs font-semibold text-foreground mb-1">
                    {action.title}
                  </Text>
                  <div className={`inline-block px-2 py-0.5 bg-gradient-to-r ${action.gradient} rounded-full`}>
                    <Text className="text-white text-xs font-bold">
                      {action.badge}
                    </Text>
                  </div>
                </div>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </div>
  );

  const renderFeaturedItems = () => (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-5">
        <Title level={4} className="mb-0 text-foreground font-bold">
          <Star className="inline mr-2 text-amber-500" size={20} />
          今日精选
        </Title>
        <motion.div whileTap={{ scale: 0.95 }}>
          <Text className="text-purple-500 font-semibold text-sm">查看全部 →</Text>
        </motion.div>
      </div>
      <div className="space-y-4">
        {mockData.featuredItems.map((item, index) => (
          <motion.div
            key={item.id}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="featured-card"
          >
            <Card 
              className="glass-card border-0 overflow-hidden"
              bodyStyle={{ padding: 0 }}
            >
              <div className="flex">
                <div className="relative">
                  <div 
                    className="w-28 h-28 bg-cover bg-center flex-shrink-0 rounded-l-3xl"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                  <div className="absolute top-2 left-2 px-2 py-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">
                    <Text className="text-white text-xs font-bold">
                      {item.discount}
                    </Text>
                  </div>
                </div>
                <div className="flex-1 p-5">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex-1">
                      <Text className="font-bold text-lg text-foreground block mb-1">
                        {item.title}
                      </Text>
                      <Text className="text-sm text-purple-500 font-medium">
                        {item.category}
                      </Text>
                    </div>
                    <ChevronRight size={18} className="text-muted-foreground ml-2" />
                  </div>
                  <div className="flex items-end justify-between">
                    <div className="flex items-end space-x-2">
                      <Text className="font-bold text-xl text-red-500">
                        {item.price}
                      </Text>
                      <Text className="text-sm text-muted-foreground line-through">
                        {item.originalPrice}
                      </Text>
                    </div>
                    <div className="flex items-center space-x-1 bg-amber-50 dark:bg-amber-900/20 px-2 py-1 rounded-full">
                      <Star size={12} className="text-amber-500 fill-current" />
                      <Text className="text-sm font-bold text-amber-600 dark:text-amber-400">
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
    <div className="mb-8">
      <Title level={4} className="mb-5 text-foreground font-bold">
        <Clock className="inline mr-2 text-blue-500" size={20} />
        最近活动
      </Title>
      <div className="space-y-4">
        {mockData.recentActivity.map((activity, index) => (
          <motion.div
            key={activity.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card 
              className="glass-card border-0"
              bodyStyle={{ padding: '20px' }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse" />
                  <div>
                    <Text className="font-semibold text-foreground block mb-1">
                      {activity.title}
                    </Text>
                    <div className="flex items-center space-x-2">
                      <Clock size={12} className="text-muted-foreground" />
                      <Text className="text-sm text-muted-foreground">
                        {activity.time}
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="px-3 py-1 bg-green-100 dark:bg-green-900/30 rounded-full">
                  <Text className="text-green-600 dark:text-green-400 text-sm font-semibold">
                    {activity.status}
                  </Text>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const renderFloatingActionButton = () => (
    <motion.div
      className="fixed bottom-28 right-6 z-40"
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.05 }}
      animate={{ 
        y: [0, -5, 0],
      }}
      transition={{ 
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <div className="w-16 h-16 gradient-bg rounded-full shadow-xl flex items-center justify-center">
        <Plus size={28} className="text-white" />
      </div>
    </motion.div>
  );

  const renderBottomNavigation = () => (
    <div className="mobile-bottom-nav">
      <div className="flex items-center justify-around h-20 px-6">
        {tabs.map((tab) => (
          <motion.button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex flex-col items-center space-y-1 touch-target relative ${
              activeTab === tab.id ? 'text-purple-500' : 'text-muted-foreground'
            }`}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              animate={activeTab === tab.id ? { scale: 1.2 } : { scale: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative"
            >
              {tab.icon}
              {activeTab === tab.id && (
                <motion.div
                  className="absolute -inset-2 bg-purple-100 dark:bg-purple-900/30 rounded-xl"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  style={{ zIndex: -1 }}
                />
              )}
            </motion.div>
            <Text 
              className={`text-xs font-semibold ${
                activeTab === tab.id ? 'text-purple-500' : 'text-muted-foreground'
              }`}
            >
              {tab.label}
            </Text>
            {activeTab === tab.id && (
              <motion.div
                className="w-1.5 h-1.5 bg-purple-500 rounded-full"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 400 }}
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
            <motion.div 
              className="flex items-center space-x-2 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <MapPin size={16} className="text-purple-500" />
              <Text className="text-muted-foreground font-medium">{mockData.user.location}</Text>
            </motion.div>
            {renderQuickActions()}
            {renderFeaturedItems()}
            {renderRecentActivity()}
          </div>
        );
      case 'favorites':
        return (
          <motion.div 
            className="text-center py-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="w-20 h-20 bg-gradient-to-r from-pink-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart size={40} className="text-white" />
            </div>
            <Title level={3} className="text-foreground mb-3">我的收藏</Title>
            <Text className="text-muted-foreground text-lg">喜欢的商品都在这里</Text>
          </motion.div>
        );
      case 'shop':
        return (
          <motion.div 
            className="text-center py-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingBag size={40} className="text-white" />
            </div>
            <Title level={3} className="text-foreground mb-3">购物商城</Title>
            <Text className="text-muted-foreground text-lg">发现更多精彩好物</Text>
          </motion.div>
        );
      case 'profile':
        return (
          <motion.div 
            className="text-center py-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <User size={40} className="text-white" />
            </div>
            <Title level={3} className="text-foreground mb-3">个人中心</Title>
            <Text className="text-muted-foreground text-lg">管理账户和设置</Text>
          </motion.div>
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
            transition={{ duration: 0.3 }}
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
