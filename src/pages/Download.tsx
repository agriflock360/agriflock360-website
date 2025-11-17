import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Apple, Smartphone } from "lucide-react";
import googlePlayIcon from "@/assets/google-play.png";
import qrAndroid from "@/assets/qr-android.png";
import qrIos from "@/assets/qr-ios.png";

const Download = () => {
  // Placeholder QR codes - these would be replaced with actual app store links
  const playStoreUrl = "https://play.google.com/store";
  const appStoreUrl = "https://apps.apple.com";

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full gradient-hero mb-6">
            <Smartphone className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Download AgriFlock360
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Take your poultry farm management to the next level. Download our mobile app and manage your operations on the go.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {/* Google Play Store */}
          <Card className="p-8 hover-lift border-2 border-primary/20 bg-card/50 backdrop-blur">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-24 h-24 mb-6">
                <img src={googlePlayIcon} alt="Google Play Store" className="w-24 h-24" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Android</h3>
              <p className="text-muted-foreground mb-6">Download from Google Play Store</p>
              
              {/* QR Code */}
              <div className="bg-white p-4 rounded-lg inline-block mb-6">
                <img src={qrAndroid} alt="Android QR Code" className="w-48 h-48" />
                <p className="text-xs text-gray-500 mt-2">Scan to download</p>
              </div>

              <Button 
                variant="hero" 
                size="lg" 
                className="w-full"
                onClick={() => window.open(playStoreUrl, '_blank')}
              >
                <img src={googlePlayIcon} alt="Google Play" className="w-5 h-5 mr-2" />
                Get it on Google Play
              </Button>
            </div>
          </Card>

          {/* Apple App Store */}
          <Card className="p-8 hover-lift border-2 border-accent/20 bg-card/50 backdrop-blur">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-gradient-to-br from-accent to-primary mb-6">
                <Apple className="w-16 h-16 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">iOS</h3>
              <p className="text-muted-foreground mb-6">Download from App Store</p>
              
              {/* QR Code */}
              <div className="bg-white p-4 rounded-lg inline-block mb-6">
                <img src={qrIos} alt="iOS QR Code" className="w-48 h-48" />
                <p className="text-xs text-gray-500 mt-2">Scan to download</p>
              </div>

              <Button 
                variant="hero" 
                size="lg" 
                className="w-full"
                onClick={() => window.open(appStoreUrl, '_blank')}
              >
                <Apple className="w-5 h-5 mr-2" />
                Download on the App Store
              </Button>
            </div>
          </Card>
        </div>

        {/* Additional Info */}
        <Card className="max-w-3xl mx-auto p-8 bg-card/50 backdrop-blur border-2 border-primary/20">
          <h3 className="text-2xl font-bold mb-4 text-center">Why Download AgriFlock360?</h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <Smartphone className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Manage On-the-Go</h4>
              <p className="text-sm text-muted-foreground">Access your farm data anywhere, anytime</p>
            </div>
            <div>
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Real-Time Alerts</h4>
              <p className="text-sm text-muted-foreground">Get instant notifications for critical events</p>
            </div>
            <div>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Offline Support</h4>
              <p className="text-sm text-muted-foreground">Work seamlessly even without internet</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Download;
