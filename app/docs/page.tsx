import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Zap, Flame, Coins, Shield, TrendingUp, Users } from "lucide-react"

export default function Docs() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Moving animated background blurs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-400/8 rounded-full blur-3xl moving-blur-1"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-400/6 rounded-full blur-3xl moving-blur-2"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-green-300/5 rounded-full blur-3xl moving-blur-3"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between p-6">
        <div className="flex items-center space-x-4">
          <Link href="/">
            <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white tracking-wide">
              <ArrowLeft className="w-4 h-4 mr-2" />
              BACK
            </Button>
          </Link>
          <div className="text-2xl font-bold text-green-400 tracking-wider">DOCUMENTATION</div>
        </div>
      </header>

      <main className="relative z-10 container mx-auto px-6 py-8 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4 tracking-wider">SUDOZ EVOLUTION LAB GUIDE</h1>
          <p className="text-xl text-gray-300 tracking-wide">
            Learn how to evolve your Sudoz artifacts and unlock their full potential.
          </p>
        </div>

        <div className="space-y-8">
          {/* Getting Started */}
          <Card className="bg-gray-900/80 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center tracking-wider">
                <Users className="w-5 h-5 mr-2 text-green-400" />
                GETTING STARTED
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <p>
                Welcome to the Sudoz Evolution Lab! This experimental facility allows you to upgrade your Sudoz NFTs and
                unlock new attributes, increased rarity, and enhanced value.
              </p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>Connect your wallet to access your Sudoz collection</li>
                <li>Navigate to the Evolve Lab</li>
                <li>Select an artifact from your collection</li>
                <li>Choose to Level Up or Burn your artifact</li>
              </ol>
            </CardContent>
          </Card>

          {/* Level Up System */}
          <Card className="bg-gray-900/80 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center tracking-wider">
                <Zap className="w-5 h-5 mr-2 text-green-400" />
                LEVEL UP SYSTEM
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <p>The Level Up system allows you to enhance your Sudoz artifacts through 10 progressive levels.</p>

              <div className="bg-gray-800/50 p-4 rounded-lg">
                <h4 className="text-white font-bold mb-2 tracking-wide">HOW IT WORKS:</h4>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Each level up costs exactly 1 SUI</li>
                  <li>Maximum level is 10 for all artifacts</li>
                  <li>Each upgrade increases rarity and value</li>
                  <li>Image and metadata update with each level</li>
                  <li>New attributes may be unlocked</li>
                </ul>
              </div>

           
            </CardContent>
          </Card>

          {/* Burn Mechanism */}
          <Card className="bg-gray-900/80 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center tracking-wider">
                <Flame className="w-5 h-5 mr-2 text-red-400" />
                BURN MECHANISM
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <p>The Burn feature is designed for future utility mechanisms and special events.</p>

              <div className="bg-red-400/10 border border-red-400/30 p-4 rounded-lg">
                <h4 className="text-red-400 font-bold mb-2 tracking-wide">⚠️ IMPORTANT WARNING</h4>
                <p className="text-sm">
                  Burning an artifact is permanent and irreversible. This action will completely remove the NFT from
                  your wallet and the blockchain. Only use this feature when participating in official burn events or
                  mechanisms.
                </p>
              </div>

              <div className="bg-gray-800/50 p-4 rounded-lg">
                <h4 className="text-white font-bold mb-2 tracking-wide">FUTURE BURN UTILITIES:</h4>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Special event participation</li>
                  <li>Exclusive reward claiming</li>
                  <li>Collection evolution mechanics</li>
                  
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Economics */}
          <Card className="bg-gray-900/80 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center tracking-wider">
                <Coins className="w-5 h-5 mr-2 text-yellow-400" />
                ECONOMICS & COSTS
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-white font-bold mb-3 tracking-wide">LEVEL UP COSTS</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>PER LEVEL UP:</span>
                      <span className="text-green-400 font-bold tracking-wide">1 SUI</span>
                    </div>
                    <div className="flex justify-between">
                      <span>LEVEL 1 → 10:</span>
                      <span className="text-green-400 font-bold tracking-wide">9 SUI TOTAL</span>
                    </div>
                    <div className="flex justify-between">
                      <span>GAS FEES:</span>
                      <span className="text-gray-400">~0.001 SUI</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-white font-bold mb-3 tracking-wide">VALUE INCREASES</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>PER LEVEL:</span>
                      <span className="text-cyan-400 font-bold tracking-wide">+2 VALUE</span>
                    </div>
                    <div className="flex justify-between">
                    
            </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Technical Details */}
          <Card className="bg-gray-900/80 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center tracking-wider">
                <Shield className="w-5 h-5 mr-2 text-cyan-400" />
                TECHNICAL DETAILS
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-white font-bold mb-3 tracking-wide">BLOCKCHAIN</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Built on Sui Network</li>
                    <li>• Smart contract verified</li>
                    <li>• Immutable upgrade logic</li>
                    <li>• Decentralized metadata</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-white font-bold mb-3 tracking-wide">SECURITY</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Audited smart contracts</li>
                    <li>• Non-custodial design</li>
                    <li>• Transparent operations</li>
                    <li>• Community verified</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-800/50 p-4 rounded-lg">
                <h4 className="text-white font-bold mb-2 tracking-wide">COLLECTION DETAILS:</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <div className="text-gray-400 tracking-wide">TOTAL SUPPLY</div>
                    <div className="font-bold tracking-wider">5,555 NFTS</div>
                  </div>
                  <div>
                    <div className="text-gray-400 tracking-wide">MAX LEVEL</div>
                    <div className="font-bold tracking-wider">LEVEL 10</div>
                  </div>
                  <div>
                    <div className="text-gray-400 tracking-wide">UPGRADE COST</div>
                    <div className="font-bold tracking-wider">1 SUI</div>
                  </div>
                  <div>
                    <div className="text-gray-400 tracking-wide">NETWORK</div>
                    <div className="font-bold tracking-wider">SUI</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* FAQ */}
          <Card className="bg-gray-900/80 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center tracking-wider">
                <TrendingUp className="w-5 h-5 mr-2 text-green-400" />
                FREQUENTLY ASKED QUESTIONS
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-6">
           

              <div>
                <h4 className="text-white font-bold mb-2 tracking-wide">WHAT HAPPENS IF I REACH MAX LEVEL?</h4>
                <p className="text-sm">
                  Level 10 artifacts gain special "Mythic" status with unique visual effects and exclusive traits that
                  cannot be obtained otherwise.
                </p>
              </div>

              <div>
                <h4 className="text-white font-bold mb-2 tracking-wide">ARE THERE ANY RISKS?</h4>
                <p className="text-sm">
                  Level ups are safe and guaranteed. The only risk is with the Burn function, which permanently destroys
                  the NFT.
                </p>
              </div>

              <div>
                <h4 className="text-white font-bold mb-2 tracking-wide">CAN I TRADE UPGRADED ARTIFACTS?</h4>
                <p className="text-sm">
                  Yes! Upgraded artifacts can be freely traded on any NFT marketplace that supports Sui NFTs. Higher
                  level artifacts typically have increased market value.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center py-12">
          <h2 className="text-3xl font-bold text-white mb-4 tracking-wider">READY TO EVOLVE?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Enter the Evolution Lab and start upgrading your Sudoz artifacts today. Unlock new levels of rarity and
            value in our experimental sci-fi environment.
          </p>
          <Link href="/evolve-lab">
            <Button
              size="lg"
              className="bg-green-400 hover:bg-green-500 text-black px-8 py-4 rounded-xl font-bold tracking-wider"
            >
              <Zap className="w-5 h-5 mr-2" />
              ENTER EVOLUTION LAB
            </Button>
          </Link>
        </div>
      </main>
    </div>
  )
}
