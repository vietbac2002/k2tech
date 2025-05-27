"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const { status } = useSession();
  const router = useRouter();

  const showSession = () => {
    if (status === "authenticated") {
      return (
        <button
          className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          onClick={() => {
            signOut({ redirect: false }).then(() => {
              router.push("/");
            });
          }}
        >
          Sign Out
        </button>
      );
    } else if (status === "loading") {
      return <span className="text-[#888] text-sm mt-7">Loading...</span>;
    } else {
      return (
        <Link
          href="/login"
          className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
        >
          Sign In
        </Link>
      );
    }
  };
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <h1 className="text-xl pb-4">Home</h1>
        {showSession()}
      </main>
      {/* <!-- Hero Section --> */}
      <section className="hero-section text-white">
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Create & Manage Events Like Never Before</h1>
            <p className="text-xl md:text-2xl mb-8">The all-in-one platform for event organizers to create, promote, and sell tickets to amazing events.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="#" className="px-8 py-4 bg-white text-indigo-600 font-bold rounded-lg hover:bg-gray-100 transition">Create Event</a>
              <a href="#" className="px-8 py-4 bg-transparent border-2 border-white font-bold rounded-lg hover:bg-white hover:text-indigo-600 transition">Explore Events</a>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Stats Section --> */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="stats-item bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">50K+</div>
              <div className="text-gray-600">Events Created</div>
            </div>
            <div className="stats-item bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">2M+</div>
              <div className="text-gray-600">Tickets Sold</div>
            </div>
            <div className="stats-item bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">10K+</div>
              <div className="text-gray-600">Happy Organizers</div>
            </div>
            <div className="stats-item bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">100+</div>
              <div className="text-gray-600">Countries</div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Features Section --> */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features for Event Success</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Everything you need to create, manage, and grow your events in one place.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="feature-icon bg-indigo-100 text-indigo-600">
                <i className="fas fa-ticket-alt text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Ticketing & Registration</h3>
              <p className="text-gray-600">Sell tickets online with multiple ticket types, discounts, and promo codes. Manage attendees with ease.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="feature-icon bg-purple-100 text-purple-600">
                <i className="fas fa-chart-line text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Analytics Dashboard</h3>
              <p className="text-gray-600">Get real-time insights into ticket sales, attendee demographics, and event performance metrics.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="feature-icon bg-blue-100 text-blue-600">
                <i className="fas fa-envelope-open-text text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Email Marketing</h3>
              <p className="text-gray-600">Send targeted email campaigns to promote your event and keep attendees engaged.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="feature-icon bg-green-100 text-green-600">
                <i className="fas fa-check-circle text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Check-in App</h3>
              <p className="text-gray-600">Fast and secure check-in for your attendees with our mobile app and QR code scanning.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="feature-icon bg-yellow-100 text-yellow-600">
                <i className="fas fa-users text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Networking Tools</h3>
              <p className="text-gray-600">Help attendees connect with each other through our networking features and matchmaking.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="feature-icon bg-red-100 text-red-600">
                <i className="fas fa-video text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Virtual Events</h3>
              <p className="text-gray-600">Host hybrid or fully virtual events with integrated video streaming and interactive features.</p>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Popular Events Section --> */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold">Popular Events</h2>
              <p className="text-gray-600">Discover amazing events happening near you</p>
            </div>
            <a href="#" className="text-indigo-600 font-medium hover:text-indigo-700">View All Events <i className="fas fa-arrow-right ml-1"></i></a>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* <!-- Event Card 1 --> */}
            <div className="event-card bg-white rounded-xl overflow-hidden shadow-sm transition duration-300">
              <div className="relative">
                <img src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Music Festival" className="w-full h-48 object-cover" />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-medium shadow">
                  <i className="fas fa-music mr-1 text-indigo-600"></i> Music
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">Summer Music Festival</h3>
                  <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full">Popular</span>
                </div>
                <p className="text-gray-600 mb-4">Join us for the biggest music festival of the year with top artists from around the world.</p>
                <div className="flex items-center text-gray-500 mb-4">
                  <i className="far fa-calendar-alt mr-2"></i>
                  <span>June 15-17, 2023</span>
                </div>
                <div className="flex items-center text-gray-500 mb-6">
                  <i className="fas fa-map-marker-alt mr-2"></i>
                  <span>Central Park, New York</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-indigo-600 font-bold">$99+</div>
                  <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-700">Get Tickets <i className="fas fa-arrow-right ml-1"></i></a>
                </div>
              </div>
            </div>

            {/* <!-- Event Card 2 --> */}
            <div className="event-card bg-white rounded-xl overflow-hidden shadow-sm transition duration-300">
              <div className="relative">
                <img src="https://images.unsplash.com/photo-1531058020387-3be344556be6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Tech Conference" className="w-full h-48 object-cover" />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-medium shadow">
                  <i className="fas fa-laptop-code mr-1 text-blue-600"></i> Tech
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">Future Tech Summit</h3>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Early Bird</span>
                </div>
                <p className="text-gray-600 mb-4">Explore the latest in AI, blockchain, and emerging technologies with industry leaders.</p>
                <div className="flex items-center text-gray-500 mb-4">
                  <i className="far fa-calendar-alt mr-2"></i>
                  <span>July 22-23, 2023</span>
                </div>
                <div className="flex items-center text-gray-500 mb-6">
                  <i className="fas fa-map-marker-alt mr-2"></i>
                  <span>Moscone Center, San Francisco</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-blue-600 font-bold">$299+</div>
                  <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-700">Get Tickets <i className="fas fa-arrow-right ml-1"></i></a>
                </div>
              </div>
            </div>

            {/* <!-- Event Card 3 --> */}
            <div className="event-card bg-white rounded-xl overflow-hidden shadow-sm transition duration-300">
              <div className="relative">
                <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Food Festival" className="w-full h-48 object-cover" />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-medium shadow">
                  <i className="fas fa-utensils mr-1 text-red-600"></i> Food
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">International Food Fair</h3>
                  <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">New</span>
                </div>
                <p className="text-gray-600 mb-4">Taste culinary delights from around the world at this annual food festival.</p>
                <div className="flex items-center text-gray-500 mb-4">
                  <i className="far fa-calendar-alt mr-2"></i>
                  <span>August 5-7, 2023</span>
                </div>
                <div className="flex items-center text-gray-500 mb-6">
                  <i className="fas fa-map-marker-alt mr-2"></i>
                  <span>Grant Park, Chicago</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-red-600 font-bold">$35+</div>
                  <a href="#" className="text-sm font-medium text-red-600 hover:text-red-700">Get Tickets <i className="fas fa-arrow-right ml-1"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Testimonials Section --> */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Thousands of Event Organizers</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Don't just take our word for it. Here's what our customers say about us.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="testimonial-card bg-white p-8 rounded-xl shadow-sm">
              <div className="flex items-center mb-6">
                <div className="flex-shrink-0">
                  <img className="h-12 w-12 rounded-full" src="https://randomuser.me/api/portraits/women/32.jpg" alt="Sarah Johnson" />
                </div>
                <div className="ml-4">
                  <div className="font-bold">Sarah Johnson</div>
                  <div className="text-gray-600">Event Manager, TechConf</div>
                </div>
              </div>
              <p className="text-gray-600 mb-6">"EventX has transformed how we organize our annual tech conference. The ticketing system is seamless, and the analytics help us make data-driven decisions."</p>
              <div className="flex text-yellow-400">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
            </div>

            <div className="testimonial-card bg-white p-8 rounded-xl shadow-sm">
              <div className="flex items-center mb-6">
                <div className="flex-shrink-0">
                  <img className="h-12 w-12 rounded-full" src="https://randomuser.me/api/portraits/men/43.jpg" alt="Michael Chen" />
                </div>
                <div className="ml-4">
                  <div className="font-bold">Michael Chen</div>
                  <div className="text-gray-600">Founder, FoodFest Co.</div>
                </div>
              </div>
              <p className="text-gray-600 mb-6">"The check-in app alone has saved us hundreds of hours. Our attendees love how smooth the experience is from ticket purchase to event day."</p>
              <div className="flex text-yellow-400">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
            </div>

            <div className="testimonial-card bg-white p-8 rounded-xl shadow-sm">
              <div className="flex items-center mb-6">
                <div className="flex-shrink-0">
                  <img className="h-12 w-12 rounded-full" src="https://randomuser.me/api/portraits/women/65.jpg" alt="Emily Rodriguez" />
                </div>
                <div className="ml-4">
                  <div className="font-bold">Emily Rodriguez</div>
                  <div className="text-gray-600">Marketing Director, MusicFest</div>
                </div>
              </div>
              <p className="text-gray-600 mb-6">"We've increased our ticket sales by 40% since switching to EventX. The marketing tools and integrations are game-changers for event promotion."</p>
              <div className="flex text-yellow-400">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- CTA Section --> */}
      <section className="gradient-bg text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Create Your Next Event?</h2>
            <p className="text-xl mb-8">Join thousands of event organizers who trust EventX to power their events.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="#" className="px-8 py-4 bg-white text-indigo-600 font-bold rounded-lg hover:bg-gray-100 transition">Get Started for Free</a>
              <a href="#" className="px-8 py-4 bg-transparent border-2 border-white font-bold rounded-lg hover:bg-white hover:text-indigo-600 transition">Schedule a Demo</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
