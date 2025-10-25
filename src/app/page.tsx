"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Award, Crown, Eye, Mail, MessageSquare, Palette, Shield, Sparkles, Star, Truck, Users } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="ArtShop"
          button={{
            text: "Browse Gallery",
            href: "gallery"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Discover Exceptional Art"
          description="Curate your space with original paintings, sculptures, and contemporary artworks from emerging and established artists worldwide."
          tag="Gallery Collection"
          tagIcon={Palette}
          buttons={[
            {
              text: "Browse Artwork",
              href: "gallery"
            },
            {
              text: "View Collections",
              href: "collections"
            }
          ]}
          imageSrc="https://images.pexels.com/photos/2559741/pexels-photo-2559741.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Modern art gallery interior"
          imagePosition="right"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardTwo
          title="Why Choose Our Gallery"
          description="We connect art lovers with exceptional pieces through our curated selection and expert guidance."
          tag="Our Promise"
          tagIcon={Star}
          features={[
            {
              title: "Curated Selection",
              description: "Every piece in our collection is carefully selected by art experts for quality and artistic merit.",
              icon: Eye
            },
            {
              title: "Authentication Guarantee",
              description: "All artworks come with certificates of authenticity and provenance documentation.",
              icon: Shield
            },
            {
              title: "Expert Consultation",
              description: "Our art advisors provide personalized guidance to help you find the perfect piece.",
              icon: Users
            },
            {
              title: "Global Shipping",
              description: "Professional art handling and secure worldwide shipping with insurance coverage.",
              icon: Truck
            }
          ]}
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardTwo
          title="Featured Artworks"
          description="Discover our handpicked selection of exceptional pieces from talented artists around the world."
          tag="Featured"
          tagIcon={Sparkles}
          products={[
            {
              id: "1",
              brand: "Contemporary",
              name: "Abstract Dreams",
              price: "$2,800",
              rating: 5,
              reviewCount: "12",
              imageSrc: "https://images.pexels.com/photos/34442471/pexels-photo-34442471.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Abstract Dreams painting"
            },
            {
              id: "2",
              brand: "Landscape",
              name: "Mountain Serenity",
              price: "$4,200",
              rating: 5,
              reviewCount: "8",
              imageSrc: "https://images.pexels.com/photos/5739358/pexels-photo-5739358.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Mountain Serenity landscape painting"
            },
            {
              id: "3",
              brand: "Sculpture",
              name: "Modern Form",
              price: "$6,500",
              rating: 5,
              reviewCount: "5",
              imageSrc: "https://images.pexels.com/photos/6046811/pexels-photo-6046811.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Modern Form sculpture"
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardThree
          title="Art Collection Tiers"
          description="Choose the perfect collection level for your space and budget, from emerging artists to master works."
          tag="Collections"
          tagIcon={Crown}
          plans={[
            {
              id: "emerging",
              price: "$500-2K",
              name: "Emerging Artists",
              buttons: [
                {
                  text: "Browse Collection",
                  href: "emerging"
                },
                {
                  text: "Consult Expert",
                  href: "consultation"
                }
              ],
              features: [
                "Original works from new talent",
                "Prints and small format pieces",
                "Certificate of authenticity",
                "30-day return policy"
              ]
            },
            {
              id: "established",
              badge: "Most Popular",
              badgeIcon: Star,
              price: "$2K-15K",
              name: "Established Artists",
              buttons: [
                {
                  text: "View Gallery",
                  href: "established"
                },
                {
                  text: "Schedule Visit",
                  href: "visit"
                }
              ],
              features: [
                "Mid-career artist works",
                "Medium to large format",
                "Detailed provenance",
                "White glove delivery",
                "Installation service"
              ]
            },
            {
              id: "masters",
              price: "$15K+",
              name: "Master Works",
              buttons: [
                {
                  text: "Private Viewing",
                  href: "masters"
                },
                {
                  text: "Contact Curator",
                  href: "curator"
                }
              ],
              features: [
                "Museum-quality pieces",
                "Blue-chip artist works",
                "Investment documentation",
                "Conservation consultation",
                "Custom framing included"
              ]
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Collectors Say"
          description="Hear from art collectors and interior designers who trust us with their most important purchases."
          tag="Reviews"
          tagIcon={MessageSquare}
          testimonials={[
            {
              id: "1",
              name: "Victoria Chen",
              role: "Private Collector",
              company: "Art Investment Group",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/30236438/pexels-photo-30236438.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Victoria Chen portrait"
            },
            {
              id: "2",
              name: "Marcus Rodriguez",
              role: "Gallery Director",
              company: "Modern Space Gallery",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/34415966/pexels-photo-34415966.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Marcus Rodriguez portrait"
            },
            {
              id: "3",
              name: "Sarah Thompson",
              role: "Art Enthusiast",
              company: "Interior Design Studio",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/2059631/pexels-photo-2059631.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Sarah Thompson portrait"
            },
            {
              id: "4",
              name: "David Park",
              role: "Interior Designer",
              company: "Luxury Spaces",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/8837763/pexels-photo-8837763.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "David Park portrait"
            }
          ]}
        />
      </div>

      <div id="socialproof" data-section="socialproof">
        <SocialProofOne
          title="Trusted by Leading Institutions"
          description="Our expertise is recognized by museums, galleries, and collectors worldwide."
          tag="Partners"
          tagIcon={Award}
          logos={[
            "https://images.pexels.com/photos/31706368/pexels-photo-31706368.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/2081169/pexels-photo-2081169.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/1671024/pexels-photo-1671024.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/1633970/pexels-photo-1633970.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/764884/pexels-photo-764884.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/2363/france-landmark-lights-night.jpg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/8333375/pexels-photo-8333375.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Stay Connected"
          title="Art News & Exclusive Previews"
          description="Subscribe to receive updates on new arrivals, artist spotlights, and exclusive preview invitations for our latest collections."
          tagIcon={Mail}
          inputPlaceholder="Enter your email"
          buttonText="Subscribe"
          termsText="Join our community of art lovers. Unsubscribe anytime."
          imageSrc="https://images.pexels.com/photos/3778334/pexels-photo-3778334.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Art studio workspace"
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Gallery",
              items: [
                {
                  label: "Browse Art",
                  href: "gallery"
                },
                {
                  label: "Collections",
                  href: "collections"
                },
                {
                  label: "Artists",
                  href: "artists"
                },
                {
                  label: "New Arrivals",
                  href: "new"
                }
              ]
            },
            {
              title: "Services",
              items: [
                {
                  label: "Art Advisory",
                  href: "advisory"
                },
                {
                  label: "Authentication",
                  href: "authentication"
                },
                {
                  label: "Installation",
                  href: "installation"
                },
                {
                  label: "Restoration",
                  href: "restoration"
                }
              ]
            },
            {
              title: "About",
              items: [
                {
                  label: "Our Story",
                  href: "about"
                },
                {
                  label: "Exhibitions",
                  href: "exhibitions"
                },
                {
                  label: "Contact",
                  href: "contact"
                },
                {
                  label: "Visit Gallery",
                  href: "visit"
                }
              ]
            }
          ]}
          copyrightText="© 2025 ArtShop Gallery"
        />
      </div>
    </ThemeProvider>
  );
}