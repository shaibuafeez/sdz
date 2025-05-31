"use client"

import { useEffect, useState, useMemo } from 'react'
import { Clock, Zap } from 'lucide-react'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })
  const [isLive, setIsLive] = useState(false)

  // Set the launch date to June 1, 2025, 12:00 PM UTC
  const launchDate = useMemo(() => new Date('2025-06-01T12:00:00Z'), [])

  // Calculate time left function - defined outside useEffect to avoid recreation
  const calculateTimeLeft = useMemo(() => {
    return () => {
      const now = new Date()
      const difference = launchDate.getTime() - now.getTime()
      
      if (difference <= 0) {
        setIsLive(true)
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        }
      }
      
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      }
    }
  }, [launchDate])

  useEffect(() => {
    // Initial calculation
    setTimeLeft(calculateTimeLeft())
    
    // Update every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    // Clear interval on unmount
    return () => clearInterval(timer)
  }, [calculateTimeLeft])

  // Format number to always have 2 digits
  const formatNumber = (num: number): string => {
    return num < 10 ? `0${num}` : `${num}`
  }

  return (
    <div className="w-full">
      {isLive ? (
        <div className="inline-flex items-center px-3 py-1.5 bg-green-400/20 border border-green-400/40 rounded-full text-green-400 text-xs animate-pulse">
          <Zap className="w-3 h-3 mr-1.5" />
          <span className="font-bold tracking-wider">MINT IS LIVE</span>
        </div>
      ) : (
        <div className="inline-flex items-center space-x-1.5 px-3 py-1.5 bg-gray-900/70 border border-green-400/30 rounded-full text-xs">
          <Clock className="w-3 h-3 text-green-400" />
          <span className="text-white font-medium">MINT LAUNCHES IN</span>
          <div className="flex space-x-1">
            <div className="text-green-400 font-bold">{formatNumber(timeLeft.days)}</div>
            <div className="text-gray-400">:</div>
            <div className="text-green-400 font-bold">{formatNumber(timeLeft.hours)}</div>
            <div className="text-gray-400">:</div>
            <div className="text-green-400 font-bold">{formatNumber(timeLeft.minutes)}</div>
            <div className="text-gray-400">:</div>
            <div className="text-green-400 font-bold">{formatNumber(timeLeft.seconds)}</div>
          </div>
          <span className="text-gray-400 text-[10px]">UTC</span>
        </div>
      )}
    </div>
  )
}
