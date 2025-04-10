import { useState } from "react";
import NavigationMenu from "@/components/NavigationMenu";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { MapPin, Calendar, Award, Gift, Trophy, Heart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Sample data with Indian names
const donorData = {
  name: "Rajesh Kumar",
  bloodType: "O+",
  joinDate: "March 2023",
  donations: 7,
  location: "Mumbai, India",
  nextEligible: "24 May 2025",
  points: 1450,
  rank: 34,
  cityRank: 3,
};

const badgesData = [
  { 
    id: 1, 
    name: "First Time Donor", 
    description: "Completed your first donation", 
    icon: Heart,
    earned: true,
    date: "14 Mar 2023"
  },
  { 
    id: 2, 
    name: "Regular Donor", 
    description: "Donated 5+ times", 
    icon: Award,
    earned: true,
    date: "18 Dec 2024"
  },
  { 
    id: 3, 
    name: "Hero Donor", 
    description: "Donated 10+ times", 
    icon: Trophy,
    earned: false,
    progress: 70
  },
  { 
    id: 4, 
    name: "Emergency Responder", 
    description: "Responded to 3+ emergency requests", 
    icon: Star,
    earned: false,
    progress: 33
  }
];

const rewardsData = [
  {
    id: 1,
    name: "15% off at Apollo Pharmacy",
    points: 500,
    expiresIn: "30 days",
    logo: "https://placeholder.com/logo1.png"
  },
  {
    id: 2,
    name: "Free Health Checkup at Fortis",
    points: 1200,
    expiresIn: "None",
    logo: "https://placeholder.com/logo2.png"
  },
  {
    id: 3,
    name: "PVR Movie Ticket Voucher",
    points: 800,
    expiresIn: "60 days",
    logo: "https://placeholder.com/logo3.png"
  }
];

const donationHistoryData = [
  { id: 1, date: "14 Mar 2023", location: "Lilavati Hospital", type: "Whole Blood", points: 200 },
  { id: 2, date: "18 Jun 2023", location: "Blood Bank Central, Mumbai", type: "Plasma", points: 250 },
  { id: 3, date: "5 Oct 2023", location: "Community Camp, Andheri", type: "Whole Blood", points: 200 },
  { id: 4, date: "22 Dec 2023", location: "Hinduja Hospital", type: "Platelets", points: 300 },
  { id: 5, date: "8 Mar 2024", location: "KEM Medical College", type: "Whole Blood", points: 200 },
  { id: 6, date: "14 Jul 2024", location: "Blood Bank Central, Mumbai", type: "Whole Blood", points: 200 },
  { id: 7, date: "18 Dec 2024", location: "Lilavati Hospital", type: "Plasma", points: 250 }
];

const topDonorsData = [
  { id: 1, name: "Priya Sharma", donations: 15, points: 3200, bloodType: "B+" },
  { id: 2, name: "Rahul Khanna", donations: 12, points: 2750, bloodType: "A-" },
  { id: 3, name: "Rajesh Kumar", donations: 7, points: 1450, bloodType: "O+" },
  { id: 4, name: "Amit Patel", donations: 6, points: 1350, bloodType: "AB+" },
  { id: 5, name: "Divya Malhotra", donations: 5, points: 1100, bloodType: "O-" }
];

const DonorProfile = () => {
  const [selectedTab, setSelectedTab] = useState("overview");
  
  return (
    <div className="flex flex-col min-h-screen">
      <NavigationMenu />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Donor Profile Card */}
          <Card className="lg:col-span-3">
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
                <Avatar className="w-24 h-24 border-2 border-blood-100">
                  <AvatarFallback className="text-4xl bg-blood-50 text-blood-500">{donorData.name.charAt(0)}</AvatarFallback>
                </Avatar>
                
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                    <h1 className="text-2xl font-bold">{donorData.name}</h1>
                    <Badge className="bg-blood-500 w-fit" variant="default">
                      {donorData.bloodType}
                    </Badge>
                    <Badge variant="outline" className="w-fit border-green-500 text-green-700 bg-green-50">
                      Verified Donor
                    </Badge>
                  </div>
                  
                  <div className="mt-2 flex flex-col sm:flex-row gap-3 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{donorData.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>Member since {donorData.joinDate}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-6 md:ml-auto">
                  <div className="text-center px-4">
                    <div className="text-3xl font-bold text-blood-600">{donorData.donations}</div>
                    <div className="text-sm text-muted-foreground">Donations</div>
                  </div>
                  
                  <div className="text-center px-4">
                    <div className="text-3xl font-bold text-blood-600">{donorData.points}</div>
                    <div className="text-sm text-muted-foreground">Points</div>
                  </div>
                  
                  <div className="text-center px-4">
                    <div className="text-3xl font-bold text-blood-600">#{donorData.cityRank}</div>
                    <div className="text-sm text-muted-foreground">City Rank</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 bg-blood-50 p-4 rounded-lg flex flex-col sm:flex-row items-center justify-between">
                <div>
                  <span className="text-sm text-muted-foreground">Next eligible donation date</span>
                  <div className="font-medium">{donorData.nextEligible}</div>
                </div>
                <Button className="mt-3 sm:mt-0">Schedule Donation</Button>
              </div>
            </CardContent>
          </Card>
          
          {/* Tabs Section */}
          <div className="lg:col-span-2">
            <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
              <TabsList className="grid grid-cols-3 mb-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="badges">Badges</TabsTrigger>
                <TabsTrigger value="rewards">Rewards</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="space-y-6">
                {/* Donations History Card */}
                <Card>
                  <CardHeader>
                    <CardTitle>Donation History</CardTitle>
                    <CardDescription>Record of all your past donations</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {donationHistoryData.map(donation => (
                        <div 
                          key={donation.id} 
                          className="border-b border-border last:border-0 pb-3 last:pb-0 flex justify-between items-center"
                        >
                          <div>
                            <div className="font-medium">{donation.date}</div>
                            <div className="text-sm text-muted-foreground flex items-center gap-1">
                              <MapPin className="h-3 w-3" /> {donation.location}
                            </div>
                            <div className="mt-1">
                              <Badge variant="outline">{donation.type}</Badge>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center gap-1 text-amber-600 font-medium">
                              <Award className="h-4 w-4" />
                              {donation.points} points
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                {/* Upcoming Badge Card */}
                <Card>
                  <CardHeader>
                    <CardTitle>Next Badge Progress</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4">
                      <div className="bg-blood-100 text-blood-600 p-3 rounded-full">
                        <Trophy className="h-8 w-8" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-1">
                          <div className="font-medium">Hero Donor Badge</div>
                          <div className="text-sm">{donorData.donations}/10 donations</div>
                        </div>
                        <Progress value={70} className="h-2" />
                        <div className="text-sm text-muted-foreground mt-1">
                          3 more donations to earn this badge
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="badges" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {badgesData.map(badge => (
                    <Card key={badge.id} className={!badge.earned ? "opacity-70" : ""}>
                      <CardContent className="pt-6">
                        <div className="flex items-center gap-4">
                          <div className={`${badge.earned ? 'bg-blood-100 text-blood-600' : 'bg-gray-100 text-gray-500'} p-3 rounded-full`}>
                            <badge.icon className="h-8 w-8" />
                          </div>
                          <div className="flex-1">
                            <div className="font-medium">{badge.name}</div>
                            <div className="text-sm text-muted-foreground">{badge.description}</div>
                            {badge.earned ? (
                              <div className="mt-1 text-xs font-medium text-green-600">
                                Earned on {badge.date}
                              </div>
                            ) : (
                              <div className="mt-2">
                                <Progress value={badge.progress} className="h-1.5" />
                                <div className="text-xs text-muted-foreground mt-1">
                                  {badge.progress}% complete
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="rewards" className="space-y-4">
                <div className="flex justify-between items-center pb-2">
                  <div className="font-medium">Available Rewards</div>
                  <div className="text-sm">
                    Your Points: <span className="font-bold text-blood-600">{donorData.points}</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {rewardsData.map(reward => (
                    <Card key={reward.id}>
                      <CardContent className="pt-6">
                        <div className="flex items-center gap-4">
                          <div className="bg-gray-100 p-3 rounded-full">
                            <Gift className="h-8 w-8 text-blood-500" />
                          </div>
                          <div className="flex-1">
                            <div className="font-medium">{reward.name}</div>
                            <div className="text-xs text-muted-foreground">
                              Expires: {reward.expiresIn}
                            </div>
                            <div className="mt-2 flex justify-between items-center">
                              <div className="text-sm font-medium text-amber-600">{reward.points} points</div>
                              <Button 
                                variant={donorData.points >= reward.points ? "default" : "outline"} 
                                size="sm"
                                disabled={donorData.points < reward.points}
                              >
                                {donorData.points >= reward.points ? "Redeem" : "Not Enough Points"}
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          {/* Sidebar Cards */}
          <div className="space-y-6">
            {/* Top Donors Card */}
            <Card>
              <CardHeader>
                <CardTitle>Top Donors in Your City</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {topDonorsData.map((donor, index) => (
                  <div 
                    key={donor.id} 
                    className={`flex items-center gap-3 ${donor.name === donorData.name ? 'bg-blood-50 p-2 rounded-md' : ''}`}
                  >
                    <div className={`
                      w-8 h-8 rounded-full flex items-center justify-center font-bold
                      ${index === 0 ? 'bg-amber-100 text-amber-600' : 
                        index === 1 ? 'bg-gray-200 text-gray-600' : 
                          index === 2 ? 'bg-amber-700/20 text-amber-800' : 'bg-gray-100 text-gray-500'}
                    `}>
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium flex items-center gap-2">
                        {donor.name}
                        {donor.name === donorData.name && (
                          <span className="text-xs bg-blood-100 text-blood-600 px-2 py-0.5 rounded">You</span>
                        )}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {donor.donations} donations · {donor.points} points
                      </div>
                    </div>
                    <Badge className="bg-blood-500">{donor.bloodType}</Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
            
            {/* Upcoming Rewards Card */}
            <Card>
              <CardHeader>
                <CardTitle>Available Points</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blood-600">{donorData.points}</div>
                  <div className="text-sm text-muted-foreground mt-1">Total Earned Points</div>
                  <Button className="mt-4 w-full" variant="outline">View All Rewards</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default DonorProfile;
