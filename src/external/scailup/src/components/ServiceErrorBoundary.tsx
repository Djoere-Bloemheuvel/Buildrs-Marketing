import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ServiceErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Service animation error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }
      
      // Graceful fallback without animations
      return (
        <div className="relative py-20 lg:py-28 flex items-center justify-center px-4 overflow-hidden bg-premium-black">
          <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="h-12 bg-premium-gray/20 rounded-lg w-3/4"></div>
                <div className="h-6 bg-premium-gray/15 rounded-lg w-1/2"></div>
                <div className="h-4 bg-premium-gray/10 rounded-lg w-full"></div>
                <div className="flex gap-4 pt-8">
                  <div className="h-12 bg-premium-gray/20 rounded-full w-32"></div>
                  <div className="h-12 bg-premium-gray/15 rounded-full w-32"></div>
                </div>
              </div>
            </div>
            <div className="w-72 h-72 bg-premium-gray/20 rounded-3xl mx-auto flex items-center justify-center">
              <p className="text-premium-silver/60 text-sm text-center">
                Service content loading...
              </p>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}