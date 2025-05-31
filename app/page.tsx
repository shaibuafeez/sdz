"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Zap,
  Beaker,
  Sparkles,
  Dna,
  Activity,
  Shield,
  Users,
  TrendingUp,
  Eye,
  AlertTriangle,
  Menu,
  CheckCircle,
  Wallet,
} from "lucide-react";
import WalletConnect from "./components/WalletConnect";
import { useState, useEffect } from "react";

export default function HomePage() {
  const [navOpen, setNavOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [activeLine, setActiveLine] = useState(-1); // Start with no active lines
  
  useEffect(() => {
    // Add a small delay before starting the animation
    const initialDelay = 1000;
    
    // Simple reveal animation for each line with initial delay
    const timings = [0, 5000, 10000, 15000];
    
    timings.forEach((timing, index) => {
      setTimeout(() => {
        setActiveLine(index);
      }, initialDelay + timing);
    });
  }, []);

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Digital grid pattern */}
      <div className="digital-grid"></div>
      
      {/* Moving animated background blurs - enhanced with stronger colors */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-400/25 rounded-full blur-3xl moving-blur-1"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-400/20 rounded-full blur-3xl moving-blur-2"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-green-300/15 rounded-full blur-3xl moving-blur-3"></div>
        <div className="absolute top-3/4 left-1/3 w-72 h-72 bg-purple-400/12 rounded-full blur-3xl moving-blur-1"></div>
        <div className="absolute bottom-1/2 right-1/2 w-56 h-56 bg-cyan-300/18 rounded-full blur-3xl moving-blur-2"></div>
      </div>

      {/* Enhanced neon particles with more variety */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-green-400 rounded-full pulse-neon"></div>
        <div className="absolute top-3/4 right-1/4 w-1.5 h-1.5 bg-cyan-400 rounded-full pulse-neon"></div>
        <div className="absolute top-1/2 left-3/4 w-2.5 h-2.5 bg-green-300 rounded-full pulse-neon"></div>
        <div className="absolute bottom-1/4 left-1/2 w-1 h-1 bg-cyan-300 rounded-full pulse-neon"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-purple-400 rounded-full pulse-neon"></div>
        <div className="absolute bottom-1/3 left-1/6 w-1.5 h-1.5 bg-green-500 rounded-full pulse-neon"></div>
        <div className="absolute top-2/3 right-1/6 w-2 h-2 bg-cyan-500 rounded-full pulse-neon"></div>
        <div className="absolute top-1/6 right-1/4 w-2 h-2 bg-green-400 rounded-full pulse-neon"></div>
        <div className="absolute bottom-1/6 left-1/4 w-1 h-1 bg-cyan-400 rounded-full pulse-neon"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 px-4 py-3 md:p-6">
        <div className="flex items-center justify-between">
          <div className="text-xl md:text-3xl font-bold text-green-400 tracking-wider">
            SUDOZ
          </div>
          <div className="flex items-center space-x-4">
            <div className="md:hidden">
              <button
                onClick={() => setNavOpen(!navOpen)}
                className="text-green-400 focus:outline-none z-50"
              >
                <Menu className="w-7 h-7" />
              </button>
            </div>
            <div className="hidden md:block">
              <WalletConnect />
            </div>
          </div>
        </div>
        {/* Mobile nav overlay */}
        {navOpen && (
          <div
            className="fixed inset-0 bg-black z-40 md:hidden"
            onClick={() => setNavOpen(false)}
          ></div>
        )}
        {/* Nav menu */}
        <nav
          className={`fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center space-y-8 text-2xl font-bold text-green-400 transition-transform duration-300 md:static md:bg-transparent md:flex md:flex-row md:items-center md:justify-end md:space-y-0 md:space-x-8 md:text-base md:font-normal ${
            navOpen
              ? "translate-x-0 bg-black z-50 pointer-events-auto"
              : "-translate-x-full pointer-events-none"
          } md:translate-x-0 md:pointer-events-auto`}
        >
          <button
            onClick={() => setNavOpen(false)}
            className="absolute top-6 right-6 text-white md:hidden"
          >
            ✕
          </button>
          <div className="md:hidden mt-4 flex justify-center">
            <WalletConnect />
          </div>
        </nav>
      </header>

      {showSuccess && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50">
          <div className="bg-green-400/20 border border-green-400/40 rounded-xl p-4 flex items-center space-x-3">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span className="text-green-400 font-bold tracking-wide">
              {successMessage}
            </span>
          </div>
        </div>
      )}

      <main className="relative z-10 container mx-auto px-6 py-8">
        <div className="space-y-8">
          {/* Hero Section */}
          <section className="relative z-10 flex flex-col items-center justify-center min-h-[60vh] px-2 md:px-6 text-center">
            <div className="mb-6 md:mb-12">
              <div className="inline-flex items-center px-3 py-1.5 md:px-6 md:py-3 bg-green-400/20 border border-green-400/40 rounded-full text-green-400 text-xs md:text-lg mb-4 md:mb-8 tracking-wider">
                <Beaker className="w-3 h-3 md:w-5 md:h-5 mr-1.5 md:mr-3" />
                WELCOME TO SUDOZ LABS
              </div>
              <h1 className="text-3xl md:text-7xl font-bold text-white mb-4 md:mb-8 leading-tight tracking-wider">
                <span className="text-glitch" data-text="THE SUDOZ">THE SUDOZ</span>
                <span className="block text-green-400 relative">
                  <span className="relative inline-block">
                    COLLECTION
                    <div className="absolute -top-2 md:-top-4 -right-2 md:-right-4 w-4 md:w-8 h-4 md:h-8 bg-green-400/30 rounded-full blur-lg pulse-neon"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-text-shimmer"></div>
                  </span>
                </span>
              </h1>
              <div className="text-xs md:text-xl text-gray-300 max-w-xs md:max-w-3xl mx-auto mb-6 md:mb-12 leading-relaxed">
                <div className="typewriter">
                  <div className={`typewriter-line ${activeLine >= 0 ? 'active' : ''}`} style={{position: 'relative', animationDelay: '0s'}}>
                    Deep within the SUDOZ laboratories, a revolutionary breakthrough in quantum digital genetics has emerged.
                    {activeLine === 0 && <div className="typewriter-cursor"></div>}
                  </div>
                  <div className={`typewriter-line ${activeLine >= 1 ? 'active' : ''}`} style={{position: 'relative', animationDelay: '5s'}}>
                    Your NFTs are no longer static artifacts—they are{" "}
                    <span className="text-green-500 font-bold relative group glow-text">
                      living digital organisms
                      <span className="absolute -inset-1 bg-green-400/20 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                    </span>
                    {activeLine === 1 && <div className="typewriter-cursor"></div>}
                  </div>
                  <div className={`typewriter-line ${activeLine >= 2 ? 'active' : ''}`} style={{position: 'relative', animationDelay: '10s'}}>
                    capable of autonomous evolution, genetic mutation, and transcendence beyond conventional blockchain limitations.
                    {activeLine === 2 && <div className="typewriter-cursor"></div>}
                  </div>
                  <div className={`typewriter-line ${activeLine >= 3 ? 'active' : ''}`} style={{position: 'relative', animationDelay: '15s'}}>
                    Each specimen carries a unique genetic signature that determines its abilities and evolutionary potential.
                    {activeLine === 3 && <div className="typewriter-cursor"></div>}
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-6 md:mb-12">
                <Badge
                  variant="secondary"
                  className="bg-red-500/20 text-red-400 border-red-400/30 px-3 py-1 text-xs md:text-lg tracking-wider"
                >
                  <AlertTriangle className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                  EXPERIMENTAL
                </Badge>

                <Badge
                  variant="secondary"
                  className="bg-cyan-500/20 text-cyan-400 border-cyan-400/30 px-3 py-1 text-xs md:text-lg tracking-wider"
                >
                  <Activity className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                  LIVE EVOLUTION
                </Badge>
              </div>
              <div className="flex flex-col gap-2 md:flex-row md:gap-6 mb-4 md:mb-16 w-full max-w-xs md:max-w-none mx-auto">
                <Link href="/evolve-lab" className="block w-full">
                  <Button
                    size="lg"
                    className="w-full bg-green-400 hover:bg-green-500 text-black px-4 md:px-12 py-3 md:py-6 text-base md:text-xl font-bold rounded-xl shadow-lg shadow-green-400/25 transition-all duration-300 hover:shadow-green-400/40 hover:scale-105 tracking-wider animate-button-glow relative overflow-hidden group"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-text-shimmer"></span>
                    <span className="relative z-10 flex items-center justify-center w-full">
                      <Zap className="w-4 h-4 md:w-6 md:h-6 mr-2 md:mr-3 group-hover:animate-button-pulse" />
                      ENTER THE LAB
                      <ArrowRight className="w-4 h-4 md:w-6 md:h-6 ml-2 md:ml-3 group-hover:animate-button-pulse" />
                    </span>
                  </Button>
                </Link>
                <Link href="/collection" className="block w-full">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full border-green-400 text-green-400 hover:bg-green-400/10 hover:text-green-300 px-4 md:px-12 py-3 md:py-6 text-base md:text-xl font-bold rounded-xl transition-all duration-300 hover:scale-105 tracking-wider group relative overflow-hidden"
                  >
                    <span className="absolute inset-0 bg-green-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                    <span className="relative z-10 flex items-center justify-center w-full">
                      <Sparkles className="w-4 h-4 md:w-6 md:h-6 mr-2 md:mr-3 group-hover:animate-button-pulse" />
                      VIEW COLLECTION
                    </span>
                  </Button>
                </Link>
                <Link href="/vault" className="block w-full">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-300 px-4 md:px-12 py-3 md:py-6 text-base md:text-xl font-bold rounded-xl transition-all duration-300 hover:scale-105 tracking-wider group relative overflow-hidden"
                  >
                    <span className="absolute inset-0 bg-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                    <span className="relative z-10 flex items-center justify-center w-full">
                      <Shield className="w-4 h-4 md:w-6 md:h-6 mr-2 md:mr-3 group-hover:animate-button-pulse" />
                      ENTER THE VAULT
                    </span>
                  </Button>
                </Link>
              </div>
            </div>

            {/* Scroll indicator */}
            <div className="animate-bounce">
              <div className="w-6 h-10 border-2 border-green-400/50 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-green-400 rounded-full mt-2 animate-pulse"></div>
              </div>
            </div>
          </section>

          {/* The Discovery Section */}
          <section className="relative z-10 py-8 md:py-32 px-2 md:px-6">
            <div className="container mx-auto max-w-lg md:max-w-6xl">
              <div className="text-center mb-8 md:mb-20">
                <h2 className="text-2xl md:text-6xl font-bold text-white mb-4 md:mb-8 tracking-wider">
                  THE DISCOVERY
                </h2>
                <p className="text-xs md:text-xl text-gray-300 max-w-xs md:max-w-4xl mx-auto leading-relaxed">
                  In the depths of blockchain technology, SUDOZ scientists have
                  unlocked the secret to digital DNA manipulation. What was once
                  impossible is now reality—NFTs that grow, evolve, and
                  transform before your eyes.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center mb-8 md:mb-20">
                <div>
                  <h3 className="text-lg md:text-4xl font-bold text-green-400 mb-3 md:mb-6 tracking-wider text-glitch" data-text="GENETIC BREAKTHROUGH">
                    GENETIC BREAKTHROUGH
                  </h3>
                  <p className="text-xs md:text-lg text-gray-300 mb-3 md:mb-6 leading-relaxed">
                    Each SUDOZ specimen contains a sophisticated genetic matrix—a quantum digital
                    DNA sequence that determines its visual appearance, evolutionary potential, and adaptive capabilities. 
                    Through our revolutionary SynthGene™ Protocol Interface, researchers can now manipulate this genetic code
                    with unprecedented precision, triggering controlled mutations and evolutionary leaps that permanently transform the specimen's
                    blockchain signature.
                  </p>
                  <div className="space-y-2 md:space-y-4">
                    <div className="flex items-center space-x-2 md:space-x-3 group hover:bg-green-400/5 p-2 rounded-lg transition-colors duration-300">
                      <div className="w-2 h-2 bg-green-400 rounded-full pulse-neon"></div>
                      <div>
                        <span className="text-xs md:text-base text-gray-300 group-hover:text-green-400 transition-colors duration-300 font-medium block">
                          10 Quantum Evolution Levels Per Specimen
                        </span>
                        <span className="text-xs text-gray-500 group-hover:text-green-400/70 transition-colors duration-300 hidden group-hover:block">
                          Each level adds 1 point to your base 2 points
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 md:space-x-3 group hover:bg-cyan-400/5 p-2 rounded-lg transition-colors duration-300">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full pulse-neon"></div>
                      <div>
                        <span className="text-xs md:text-base text-gray-300 group-hover:text-cyan-400 transition-colors duration-300 font-medium block">
                          Advanced Evolution System
                        </span>
                        <span className="text-xs text-gray-500 group-hover:text-cyan-400/70 transition-colors duration-300 hidden group-hover:block">
                          Level up for visual enhancements and more points
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 md:space-x-3 group hover:bg-purple-400/5 p-2 rounded-lg transition-colors duration-300">
                      <div className="w-2 h-2 bg-purple-400 rounded-full pulse-neon"></div>
                      <div>
                        <span className="text-xs md:text-base text-gray-300 group-hover:text-purple-400 transition-colors duration-300 font-medium block">
                          Adaptive Neural Mutation System
                        </span>
                        <span className="text-xs text-gray-500 group-hover:text-purple-400/70 transition-colors duration-300 hidden group-hover:block">
                          Self-learning algorithms influence evolution paths
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 md:space-x-3 group hover:bg-green-400/5 p-2 rounded-lg transition-colors duration-300">
                      <div className="w-2 h-2 bg-green-400 rounded-full pulse-neon"></div>
                      <div>
                        <span className="text-xs md:text-base text-gray-300 group-hover:text-green-400 transition-colors duration-300 font-medium block">
                          On-Chain Genetic Memory
                        </span>
                        <span className="text-xs text-gray-500 group-hover:text-green-400/70 transition-colors duration-300 hidden group-hover:block">
                          Permanent immutable record of evolutionary history
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 via-cyan-400/5 to-purple-400/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -m-1"></div>
                  <div className="w-full h-40 md:h-80 bg-gray-900/50 rounded-xl border border-green-400/30 flex items-center justify-center relative overflow-hidden group-hover:border-green-400/50 transition-colors duration-300">
                    <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
                    <div className="text-center relative z-10">
                      <Dna className="w-10 h-10 md:w-24 md:h-24 text-green-400 mx-auto mb-2 md:mb-4 animate-pulse" />
                      <div className="text-green-400 font-bold tracking-wider text-xs md:text-base">
                        DNA SEQUENCE ACTIVE
                      </div>
                      <div className="text-gray-400 text-xs md:text-sm mt-1 md:mt-2 group-hover:text-green-400/80 transition-colors duration-300">
                        DNA97/2309/57A2
                      </div>
                      <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="inline-flex items-center px-2 py-1 bg-green-400/20 border border-green-400/40 rounded-full text-green-400 text-xs tracking-wider">
                          <span className="animate-pulse">ANALYZING</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Collection Stats Section */}
          <section className="relative z-10 py-16 md:py-32 px-6">
            <div className="container mx-auto max-w-6xl">
              <div className="text-center mb-8 md:mb-20">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 md:mb-8 tracking-wider text-glitch" data-text="THE SPECIMEN COLLECTION">
                  THE SPECIMEN COLLECTION
                </h2>
                <p className="text-base md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                  Our laboratory has successfully synthesized <span className="text-green-400 font-medium">5,555</span> unique digital life forms awaiting evolutionary activation.
                  Each specimen contains proprietary genetic markers, adaptive neural networks, and unprecedented evolutionary potential.
                  This collection represents the culmination of years of quantum blockchain research and the first successful implementation of
                  <span className="text-green-400 font-medium relative group inline-block">
                    autonomous living NFTs
                    <span className="absolute -inset-1 bg-green-400/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                  </span>
                  with self-modifying genetic structures.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mb-8 md:mb-16">
                <Card className="bg-gray-900/80 border-gray-700 text-center p-3 md:p-6 group hover:bg-gray-900 hover:border-green-400/30 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="text-2xl md:text-4xl font-bold text-green-400 tracking-wider mb-1 md:mb-2 relative z-10">
                    <span className="group-hover:animate-pulse">5,555</span>
                  </div>
                  <div className="text-xs md:text-sm text-gray-400 tracking-wider group-hover:text-green-400/80 transition-colors duration-300 relative z-10">
                    TOTAL SPECIMENS
                  </div>
                </Card>
                <Card className="bg-gray-900/80 border-gray-700 text-center p-3 md:p-6 group hover:bg-gray-900 hover:border-cyan-400/30 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="text-2xl md:text-4xl font-bold text-cyan-400 tracking-wider mb-1 md:mb-2 relative z-10">
                    <span className="group-hover:animate-pulse">2,847</span>
                  </div>
                  <div className="text-xs md:text-sm text-gray-400 tracking-wider group-hover:text-cyan-400/80 transition-colors duration-300 relative z-10">
                    ACTIVE RESEARCHERS
                  </div>
                </Card>
                <Card className="bg-gray-900/80 border-gray-700 text-center p-3 md:p-6 group hover:bg-gray-900 hover:border-purple-400/30 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="text-2xl md:text-4xl font-bold text-purple-400 tracking-wider mb-1 md:mb-2 relative z-10">
                    <span className="group-hover:animate-pulse">1,203</span>
                  </div>
                  <div className="text-xs md:text-sm text-gray-400 tracking-wider group-hover:text-purple-400/80 transition-colors duration-300 relative z-10">
                    EVOLVED ENTITIES
                  </div>
                </Card>
                <Card className="bg-gray-900/80 border-gray-700 text-center p-3 md:p-6 group hover:bg-gray-900 hover:border-yellow-400/30 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="text-2xl md:text-4xl font-bold text-yellow-400 tracking-wider mb-1 md:mb-2 relative z-10">
                    <span className="group-hover:animate-pulse">10</span>
                  </div>
                  <div className="text-xs md:text-sm text-gray-400 tracking-wider group-hover:text-yellow-400/80 transition-colors duration-300 relative z-10">
                    EVOLUTION LEVELS
                  </div>
                </Card>
              </div>
              
              {/* NFT Specimen Preview */}
              <div className="mt-12 md:mt-24">
                <div className="text-center mb-8 md:mb-12">
                  <h3 className="text-2xl md:text-4xl font-bold text-white mb-4 tracking-wider">
                    SPECIMEN <span className="text-green-400">PREVIEW</span>
                  </h3>
                  <p className="text-sm md:text-lg text-gray-300 max-w-3xl mx-auto">
                    Explore a selection of our most remarkable specimens. Each one is a unique digital life form with its own genetic code.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                  {[1, 2, 3, 4].map((id) => (
                    <div key={id} className="group relative">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-green-400 to-cyan-400 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
                      <div className="relative bg-gray-900 rounded-lg overflow-hidden aspect-square flex items-center justify-center border border-gray-800 group-hover:border-green-400/50 transition-colors duration-300">
                        <div className="absolute inset-0 bg-grid-pattern opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
                        <div className="text-center p-4">
                          <div className="w-16 h-16 md:w-24 md:h-24 bg-green-400/10 rounded-full mx-auto mb-3 flex items-center justify-center group-hover:bg-green-400/20 transition-colors duration-300">
                            <div className="w-12 h-12 md:w-20 md:h-20 bg-green-400/20 rounded-full flex items-center justify-center group-hover:bg-green-400/30 transition-colors duration-300">
                              <div className="w-8 h-8 md:w-12 md:h-12 bg-green-400/30 rounded-full flex items-center justify-center pulse-neon group-hover:bg-green-400/40 transition-colors duration-300">
                                <span className="text-green-400 font-bold text-xs md:text-sm">SUDOZ</span>
                              </div>
                            </div>
                          </div>
                          <div className="text-green-400 font-bold text-xs md:text-base mb-1">SPECIMEN #{id}</div>
                          <div className="text-gray-400 text-xs md:text-sm">Level {id + 2}</div>
                          
                          <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="inline-flex items-center px-2 py-1 bg-green-400/20 border border-green-400/40 rounded-full text-green-400 text-xs">
                              VIEW DETAILS
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="text-center mt-8 md:mt-12">
                  <Link href="/collection" className="inline-block">
                    <Button 
                      variant="outline"
                      className="border-green-400 text-green-400 hover:bg-green-400/10 px-6 py-3 text-sm md:text-base font-bold rounded-xl transition-all duration-300 hover:scale-105 tracking-wider group relative overflow-hidden"
                    >
                      <span className="absolute inset-0 bg-green-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                      <span className="relative z-10 flex items-center justify-center">
                        VIEW FULL COLLECTION
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:animate-button-pulse" />
                      </span>
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="text-center">
                <Link href="/collection">
                  <Button
                    size="lg"
                    className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 text-base md:px-10 md:py-4 md:text-lg font-bold rounded-xl shadow-lg shadow-purple-500/25 transition-all duration-300 hover:shadow-purple-500/40 hover:scale-105 tracking-wider"
                  >
                    <Eye className="w-4 h-4 mr-2 md:w-5 md:h-5 md:mr-3" />
                    BROWSE SPECIMENS
                    <ArrowRight className="w-4 h-4 ml-2 md:w-5 md:h-5 md:ml-3" />
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          {/* Interactive Lab Teaser Section */}
          <section className="relative z-10 py-16 md:py-32 px-6">
            <div className="container mx-auto max-w-6xl">
              <div className="bg-gray-900/70 border border-green-400/20 rounded-2xl overflow-hidden relative">
                <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-400/10 rounded-full blur-3xl moving-blur-1"></div>
                  <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-cyan-400/10 rounded-full blur-3xl moving-blur-2"></div>
                </div>
                
                <div className="relative z-10 p-6 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-12">
                  <div className="md:w-1/2">
                    <div className="aspect-square bg-black/50 rounded-xl border border-green-400/30 overflow-hidden relative group">
                      <div className="absolute inset-0 bg-grid-pattern opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                      
                      {/* Lab Interface Mockup */}
                      <div className="absolute inset-0 flex flex-col p-4 md:p-6">
                        <div className="flex justify-between items-center mb-4 md:mb-6">
                          <div className="inline-flex items-center px-2 py-1 bg-green-400/20 border border-green-400/40 rounded-full">
                            <span className="text-green-400 text-xs md:text-sm font-bold tracking-wider">LAB INTERFACE</span>
                          </div>
                          <div className="flex space-x-2">
                            <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                          </div>
                        </div>
                        
                        <div className="flex-1 flex flex-col items-center justify-center">
                          <div className="w-24 h-24 md:w-32 md:h-32 bg-green-400/10 rounded-full flex items-center justify-center mb-4 pulse-neon">
                            <Dna className="w-12 h-12 md:w-16 md:h-16 text-green-400" />
                          </div>
                          <div className="text-center">
                            <div className="text-green-400 font-bold text-sm md:text-base mb-2">SPECIMEN #3219</div>
                            <div className="text-gray-400 text-xs md:text-sm mb-4">EVOLUTION LEVEL: 3</div>
                            <div className="inline-flex items-center px-3 py-1.5 bg-green-400 text-black rounded-lg text-xs md:text-sm font-bold tracking-wider group-hover:animate-pulse">
                              INITIATE EVOLUTION
                            </div>
                          </div>
                        </div>
                        
                        <div className="h-6 bg-gray-800/50 rounded-lg overflow-hidden">
                          <div className="h-full w-[30%] bg-gradient-to-r from-green-400 to-cyan-400 rounded-lg"></div>
                        </div>
                      </div>
                      
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="text-center">
                          <div className="text-green-400 font-bold text-lg md:text-xl mb-2">ENTER THE LAB</div>
                          <div className="text-gray-300 text-xs md:text-sm">Evolve your specimens now</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="md:w-1/2 text-center md:text-left">
                    <h3 className="text-2xl md:text-4xl font-bold text-white mb-4 tracking-wider">
                      EXPERIENCE THE <span className="text-green-400 text-glitch" data-text="EVOLUTION">EVOLUTION</span>
                    </h3>
                    <p className="text-sm md:text-lg text-gray-300 mb-6">
                      Step into our state-of-the-art laboratory where digital genetics meets blockchain technology. Watch your specimens evolve in real-time as our proprietary algorithms manipulate their genetic code.
                    </p>
                    <div className="space-y-4 mb-6">
                      <div className="flex items-start space-x-3">
                        <div className="w-5 h-5 bg-green-400/20 rounded-full flex items-center justify-center mt-0.5">
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        </div>
                        <div className="flex-1">
                          <div className="text-green-400 font-medium text-sm md:text-base">Real-time Evolution</div>
                          <div className="text-gray-400 text-xs md:text-sm">Watch genetic changes happen live</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-5 h-5 bg-cyan-400/20 rounded-full flex items-center justify-center mt-0.5">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                        </div>
                        <div className="flex-1">
                          <div className="text-cyan-400 font-medium text-sm md:text-base">Trait Manipulation</div>
                          <div className="text-gray-400 text-xs md:text-sm">Influence genetic expression patterns</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-5 h-5 bg-purple-400/20 rounded-full flex items-center justify-center mt-0.5">
                          <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        </div>
                        <div className="flex-1">
                          <div className="text-purple-400 font-medium text-sm md:text-base">Permanent Records</div>
                          <div className="text-gray-400 text-xs md:text-sm">All evolution history stored on-chain</div>
                        </div>
                      </div>
                    </div>
                    <Link href="/evolve-lab">
                      <Button className="w-full md:w-auto bg-green-400 hover:bg-green-500 text-black px-6 py-3 text-sm md:text-base font-bold rounded-xl shadow-lg shadow-green-400/25 transition-all duration-300 hover:shadow-green-400/40 hover:scale-105 tracking-wider animate-button-glow relative overflow-hidden group">
                        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-text-shimmer"></span>
                        <span className="relative z-10 flex items-center justify-center">
                          <Zap className="w-4 h-4 mr-2 group-hover:animate-button-pulse" />
                          ENTER THE LABORATORY
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:animate-button-pulse" />
                        </span>
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Warning Section */}
          <section className="relative z-10 py-16 md:py-32 px-6 bg-red-900/10">
            <div className="container mx-auto max-w-4xl text-center">
              <div className="inline-flex items-center px-3 py-1 md:px-6 md:py-3 bg-red-500/20 border border-red-500/40 rounded-full text-red-400 text-xs md:text-lg mb-4 md:mb-8 tracking-wider">
                <AlertTriangle className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3" />
                CLASSIFIED WARNING
              </div>

              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-8 tracking-wider">
                PROCEED WITH CAUTION
              </h2>
              <p className="text-sm md:text-xl text-gray-300 mb-8 md:mb-12 leading-relaxed">
                The SUDOZ Evolution Laboratory operates in uncharted territory beyond the boundaries of
                conventional blockchain science. <span className="text-red-400 font-medium">All genetic modifications are permanent and
                irreversible</span>, permanently altering the specimen's digital DNA structure. Our research indicates that evolution beyond Level 10 may trigger
                unpredictable quantum chain reactions with consequences that even our most advanced AI systems cannot accurately model or control.
              </p>

              <div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
                <div className="p-4 md:p-6 bg-gray-900/50 border border-red-400/30 rounded-xl group hover:bg-gray-900/70 hover:border-red-400/50 transition-all duration-300">
                  <div className="relative">
                    <div className="absolute -inset-3 bg-red-400/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <Shield className="w-6 h-6 md:w-8 md:h-8 text-red-400 mx-auto mb-3 md:mb-4 relative z-10" />
                  </div>
                  <h4 className="text-base md:text-lg font-bold text-white mb-1 md:mb-2 tracking-wide group-hover:text-red-400 transition-colors duration-300">
                    IRREVERSIBLE GENETIC CHANGES
                  </h4>
                  <p className="text-xs md:text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    All genetic modifications permanently alter blockchain data structures and cannot be reversed or undone by any known method
                  </p>
                </div>
                <div className="p-4 md:p-6 bg-gray-900/50 border border-yellow-400/30 rounded-xl group hover:bg-gray-900/70 hover:border-yellow-400/50 transition-all duration-300">
                  <div className="relative">
                    <div className="absolute -inset-3 bg-yellow-400/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <Activity className="w-6 h-6 md:w-8 md:h-8 text-yellow-400 mx-auto mb-3 md:mb-4 relative z-10" />
                  </div>
                  <h4 className="text-base md:text-lg font-bold text-white mb-1 md:mb-2 tracking-wide group-hover:text-yellow-400 transition-colors duration-300">
                    UNPREDICTABLE OUTCOMES
                  </h4>
                  <p className="text-xs md:text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    Evolution results are governed by quantum randomness algorithms with over 8.7 billion possible genetic expression patterns
                  </p>
                </div>
                <div className="p-4 md:p-6 bg-gray-900/50 border border-purple-400/30 rounded-xl group hover:bg-gray-900/70 hover:border-purple-400/50 transition-all duration-300">
                  <div className="relative">
                    <div className="absolute -inset-3 bg-purple-400/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <Users className="w-6 h-6 md:w-8 md:h-8 text-purple-400 mx-auto mb-3 md:mb-4 relative z-10" />
                  </div>
                  <h4 className="text-base md:text-lg font-bold text-white mb-1 md:mb-2 tracking-wide group-hover:text-purple-400 transition-colors duration-300">
                    ADVANCED RESEARCH PROTOCOL
                  </h4>
                  <p className="text-xs md:text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    Your participation contributes to our ongoing quantum genetic research and helps advance the field of autonomous digital life forms
                  </p>
                </div>
              </div>

              <p className="text-sm md:text-lg text-gray-400 mb-6 md:mb-8">
                By entering the laboratory, you acknowledge the experimental
                nature of this technology and accept full responsibility for any
                evolutionary outcomes.
              </p>

              <Link href="/evolve-lab">
                <Button
                  size="lg"
                  className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 text-base md:px-10 md:py-4 md:text-lg font-bold rounded-xl shadow-lg shadow-red-500/25 transition-all duration-300 hover:shadow-red-500/40 hover:scale-105 tracking-wider"
                >
                  <AlertTriangle className="w-5 h-5 mr-3" />I UNDERSTAND THE
                  RISKS
                  <ArrowRight className="w-5 h-5 ml-3" />
                </Button>
              </Link>
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="relative z-10 py-16 md:py-32 px-6">
            <div className="container mx-auto max-w-4xl text-center">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 md:mb-8 tracking-wider">
                THE FUTURE IS
                <span className="block text-green-400">EVOLVING</span>
              </h2>
              <p className="text-base md:text-2xl text-gray-300 mb-8 md:mb-12 leading-relaxed">
                <span className="text-green-400 font-medium">Join the quantum genetic revolution</span>. Transform your static NFTs into
                living, breathing digital organisms capable of autonomous evolution and adaptation.
                The SUDOZ laboratory stands at the frontier of blockchain innovation, awaiting your
                contribution to this unprecedented digital life experiment.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
                <Link href="/evolve-lab">
                  <Button
                    size="lg"
                    className="bg-green-400 hover:bg-green-500 text-black px-6 py-3 text-base md:px-12 md:py-6 md:text-xl font-bold rounded-xl shadow-lg shadow-green-400/25 transition-all duration-300 hover:shadow-green-400/40 hover:scale-105 tracking-wider"
                  >
                    <Zap className="w-6 h-6 mr-3" />
                    BEGIN EVOLUTION
                    <ArrowRight className="w-6 h-6 ml-3" />
                  </Button>
                </Link>

                <Link href="/docs">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-gray-400 text-gray-400 hover:bg-gray-400/10 hover:text-white px-6 py-3 text-base md:px-12 md:py-6 md:text-xl font-bold rounded-xl transition-all duration-300 hover:scale-105 tracking-wider"
                  >
                    <TrendingUp className="w-6 h-6 mr-3" />
                    RESEARCH DOCS
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 text-center py-12 text-gray-400 border-t border-gray-800/50">
        <div className="container mx-auto px-6">
          <div className="flex justify-center space-x-6 mb-6">
            <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-300 group">
              <div className="relative">
                <div className="absolute -inset-2 bg-green-400/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="relative z-10">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </div>
            </a>
            <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-300 group">
              <div className="relative">
                <div className="absolute -inset-2 bg-green-400/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="relative z-10">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
              </div>
            </a>
            <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-300 group">
              <div className="relative">
                <div className="absolute -inset-2 bg-green-400/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="relative z-10">
                  <circle cx="9" cy="12" r="1"></circle>
                  <circle cx="15" cy="12" r="1"></circle>
                  <path d="M7.5 7.2c3.4-1 5.6-1 8.5 0"></path>
                  <path d="M7.5 16.8c3.4 1 5.6 1 8.5 0"></path>
                  <path d="M15.5 17.2c0 1 1.5 3 2 3 1.5 0 2.833-1.667 3.5-3 .667-1.667.5-5.833 0-7.5-.5-1.667-1.5-4.5-3.5-4.5-1.457 0-2.234 1.234-3 2.5"></path>
                  <path d="M8.5 17.2c0 1-1.5 3-2 3-1.5 0-2.833-1.667-3.5-3-.667-1.667-.5-5.833 0-7.5.5-1.667 1.5-4.5 3.5-4.5 1.457 0 2.234 1.234 3 2.5"></path>
                </svg>
              </div>
            </a>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center gap-6 mb-6">
              <a href="#" className="text-gray-400 hover:text-green-400 text-sm transition-colors duration-300">About</a>
              <a href="#" className="text-gray-400 hover:text-green-400 text-sm transition-colors duration-300">Research</a>
              <a href="#" className="text-gray-400 hover:text-green-400 text-sm transition-colors duration-300">Collection</a>
              <a href="#" className="text-gray-400 hover:text-green-400 text-sm transition-colors duration-300">Evolution Lab</a>
              <a href="#" className="text-gray-400 hover:text-green-400 text-sm transition-colors duration-300">FAQ</a>
              <a href="#" className="text-gray-400 hover:text-green-400 text-sm transition-colors duration-300">Terms</a>
            </div>
          </div>
          
          <div className="border-t border-gray-800/30 pt-6 mt-6">
            <p className="tracking-wide text-base font-medium">
              &copy; 2025 <span className="text-green-400">SUDOZ</span> GENETIC RESEARCH LABORATORY. ALL RIGHTS RESERVED.
            </p>
            <p className="text-sm mt-2 text-gray-500">
              <span className="text-red-400/80">DISCLAIMER:</span> EXPERIMENTAL TECHNOLOGY - PROCEED AT YOUR OWN RISK
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
