import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const NotificationCenter = ({ notifications }) => {
  const [filter, setFilter] = useState('all');
  const [expandedNotification, setExpandedNotification] = useState(null);

  const filters = [
    { id: 'all', label: 'All', count: notifications?.length },
    { id: 'weather', label: 'Weather', count: notifications?.filter(n => n?.type === 'weather')?.length },
    { id: 'planting', label: 'Planting', count: notifications?.filter(n => n?.type === 'planting')?.length },
    { id: 'harvest', label: 'Harvest', count: notifications?.filter(n => n?.type === 'harvest')?.length },
    { id: 'alerts', label: 'Alerts', count: notifications?.filter(n => n?.priority === 'high')?.length }
  ];

  const getNotificationIcon = (type) => {
    switch (type) {
      case 'weather': return 'Cloud';
      case 'planting': return 'Sprout';
      case 'harvest': return 'Scissors';
      case 'irrigation': return 'Droplets';
      case 'fertilizer': return 'Zap';
      case 'pest': return 'Bug';
      default: return 'Bell';
    }
  };

  const getNotificationColor = (priority) => {
    switch (priority) {
      case 'high': return 'border-l-error bg-error/5';
      case 'medium': return 'border-l-warning bg-warning/5';
      case 'low': return 'border-l-primary bg-primary/5';
      default: return 'border-l-muted bg-muted/5';
    }
  };

  const getPriorityIcon = (priority) => {
    switch (priority) {
      case 'high': return 'AlertTriangle';
      case 'medium': return 'AlertCircle';
      case 'low': return 'Info';
      default: return 'Bell';
    }
  };

  const filteredNotifications = filter === 'all' 
    ? notifications 
    : filter === 'alerts'
    ? notifications?.filter(n => n?.priority === 'high')
    : notifications?.filter(n => n?.type === filter);

  const toggleExpanded = (id) => {
    setExpandedNotification(expandedNotification === id ? null : id);
  };

  const formatTimeAgo = (timestamp) => {
    const now = new Date();
    const notificationTime = new Date(timestamp);
    const diffInMinutes = Math.floor((now - notificationTime) / (1000 * 60));
    
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`;
    return `${Math.floor(diffInMinutes / 1440)}d ago`;
  };

  return (
    <div className="bg-white rounded-lg harvest-shadow p-6 mb-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-foreground">
          Notification Center
        </h2>
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="sm" iconName="Settings">
            Settings
          </Button>
          <Button variant="ghost" size="sm" iconName="CheckCheck">
            Mark All Read
          </Button>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 mb-6">
        {filters?.map((filterOption) => (
          <button
            key={filterOption?.id}
            onClick={() => setFilter(filterOption?.id)}
            className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium growth-transition ${
              filter === filterOption?.id
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary'
            }`}
          >
            <span>{filterOption?.label}</span>
            {filterOption?.count > 0 && (
              <span className={`px-2 py-0.5 rounded-full text-xs ${
                filter === filterOption?.id
                  ? 'bg-primary-foreground/20 text-primary-foreground'
                  : 'bg-primary/10 text-primary'
              }`}>
                {filterOption?.count}
              </span>
            )}
          </button>
        ))}
      </div>
      <div className="space-y-3 max-h-96 overflow-y-auto">
        {filteredNotifications?.length === 0 ? (
          <div className="text-center py-8">
            <Icon name="Bell" size={48} className="mx-auto text-muted-foreground mb-4" />
            <p className="text-muted-foreground">No notifications found</p>
          </div>
        ) : (
          filteredNotifications?.map((notification) => (
            <div
              key={notification?.id}
              className={`border-l-4 rounded-lg p-4 growth-transition ${getNotificationColor(notification?.priority)}`}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-3 flex-1">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name={getNotificationIcon(notification?.type)} size={20} color="var(--color-primary)" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h4 className="font-semibold text-foreground">{notification?.title}</h4>
                      <Icon name={getPriorityIcon(notification?.priority)} size={14} className="text-muted-foreground" />
                      {!notification?.read && (
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{notification?.message}</p>
                    
                    {expandedNotification === notification?.id && notification?.details && (
                      <div className="mt-3 p-3 bg-white/50 rounded-lg">
                        <p className="text-sm text-muted-foreground">{notification?.details}</p>
                        {notification?.actionRequired && (
                          <div className="mt-2 flex gap-2">
                            <Button variant="outline" size="sm">
                              {notification?.actionRequired}
                            </Button>
                          </div>
                        )}
                      </div>
                    )}
                    
                    <div className="flex items-center space-x-4 text-xs text-muted-foreground mt-2">
                      <span>{formatTimeAgo(notification?.timestamp)}</span>
                      <span className="capitalize">{notification?.type}</span>
                      {notification?.location && (
                        <div className="flex items-center space-x-1">
                          <Icon name="MapPin" size={12} />
                          <span>{notification?.location}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2 ml-4">
                  {notification?.details && (
                    <Button
                      variant="ghost"
                      size="sm"
                      iconName={expandedNotification === notification?.id ? "ChevronUp" : "ChevronDown"}
                      onClick={() => toggleExpanded(notification?.id)}
                    />
                  )}
                  <Button
                    variant="ghost"
                    size="sm"
                    iconName="X"
                  />
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="mt-6 pt-6 border-t border-border">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="text-sm text-muted-foreground">
            {filteredNotifications?.filter(n => !n?.read)?.length} unread notifications
          </div>
          <div className="flex gap-2">
            <Button variant="outline" iconName="Archive" iconPosition="left">
              Archive Old
            </Button>
            <Button variant="default" iconName="Smartphone" iconPosition="left">
              Mobile Alerts
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationCenter;