import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ServiceMockupProps {
  type: "lead-generation" | "appointment-setting" | "sales-development" | "campaign-management" | "security" | "funnel";
  className?: string;
}

export default function ServiceMockup({ type, className }: ServiceMockupProps) {
  const mockups = {
    "lead-generation": (
      <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-gray-200 shadow-sm">
        <div className="flex items-center mb-3">
          <div className="w-3 h-3 bg-red-400 rounded-full mr-2"></div>
          <div className="w-3 h-3 bg-yellow-400 rounded-full mr-2"></div>
          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
        </div>
        <div className="mb-3">
          <div className="text-sm font-medium text-gray-800">We book meetings for SaaS</div>
          <div className="text-xs text-gray-500 mt-1">🔍 Search Results</div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-gradient-to-br from-red-400 to-pink-500 rounded h-6"></div>
          <div className="bg-gradient-to-br from-purple-400 to-blue-500 rounded h-6"></div>
          <div className="bg-gradient-to-br from-orange-400 to-red-500 rounded h-6"></div>
          <div className="bg-gradient-to-br from-blue-400 to-purple-500 rounded h-6"></div>
        </div>
        <div className="flex justify-between items-center mt-3">
          <div className="flex space-x-1">
            <div className="w-4 h-4 bg-gray-200 rounded"></div>
            <div className="w-4 h-4 bg-gray-200 rounded"></div>
            <div className="w-4 h-4 bg-gray-200 rounded"></div>
          </div>
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <span className="text-white text-xs">+</span>
          </div>
        </div>
      </div>
    ),
    "appointment-setting": (
      <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-gray-200 shadow-sm">
        <div className="flex justify-between items-center mb-3">
          <div className="text-sm font-medium text-gray-800">Neurova AI</div>
          <div className="text-xs text-gray-400">•••</div>
        </div>
        <div className="text-xs text-gray-500 mb-3">Just start creating 🤖</div>
        <div className="bg-primary text-white rounded-full py-2 px-4 text-center text-sm mb-3">
          Generate AI ✨
        </div>
        <div className="text-xs text-gray-500 flex items-center">
          <span className="text-blue-500 mr-1">💎</span>
          30 credits left
        </div>
        <div className="flex justify-between mt-3 text-xs text-gray-400">
          <span>Audio & Video File</span>
          <span>Logomark</span>
          <span>Branding</span>
        </div>
      </div>
    ),
    "sales-development": (
      <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-gray-200 shadow-sm">
        <div className="flex justify-center mb-3">
          <div className="flex space-x-2">
            <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
            <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
            <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
            <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
            <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-3">
          <div className="text-sm text-gray-600 mb-2">Connect with:</div>
          <div className="space-y-1">
            <div className="flex items-center text-xs text-gray-500">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              Webflow
            </div>
            <div className="flex items-center text-xs text-gray-500">
              <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
              Framer
            </div>
            <div className="flex items-center text-xs text-gray-500">
              <span className="w-2 h-2 bg-pink-500 rounded-full mr-2"></span>
              Figma
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center mt-3">
          <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs">
            03
          </div>
          <div className="bg-primary text-white rounded-full py-1 px-3 text-xs">
            Get Started →
          </div>
        </div>
      </div>
    ),
    "campaign-management": (
      <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-gray-200 shadow-sm">
        <div className="text-xs text-gray-500 mb-2">🌍 Amsterdam</div>
        <div className="grid grid-cols-3 gap-2 mb-3">
          <div className="bg-gradient-to-br from-purple-400 to-blue-500 rounded h-8"></div>
          <div className="bg-gradient-to-br from-pink-400 to-red-500 rounded h-8"></div>
          <div className="bg-gradient-to-br from-blue-400 to-purple-500 rounded h-8"></div>
        </div>
        <div className="flex items-center mb-3">
          <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-xs mr-2">
            CA
          </div>
          <div className="text-xs text-gray-600">What is capital of <strong>Netherland</strong></div>
        </div>
        <div className="bg-primary text-white rounded-full py-1 px-3 text-center text-xs">
          Generate AI ✨
        </div>
      </div>
    ),
    "security": (
      <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-gray-200 shadow-sm relative">
        <div className="absolute inset-0 bg-gray-50 opacity-30 rounded-lg"></div>
        <div className="relative z-10">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
              <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
                <span className="text-white text-xs">🔒</span>
              </div>
            </div>
          </div>
          <div className="text-center">
            <div className="text-sm font-medium text-gray-800 mb-2">Security Certifications</div>
            <div className="grid grid-cols-2 gap-2 text-xs text-gray-600">
              <div className="bg-gray-100 rounded px-2 py-1">ISO 27001</div>
              <div className="bg-gray-100 rounded px-2 py-1">SOC 2</div>
              <div className="bg-gray-100 rounded px-2 py-1">GDPR</div>
              <div className="bg-gray-100 rounded px-2 py-1">CCPA</div>
            </div>
          </div>
        </div>
      </div>
    ),
    "funnel": (
      <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-gray-200 shadow-sm">
        <div className="flex justify-between items-center mb-3">
          <div className="text-sm font-medium text-gray-800">Upstream - Tofu</div>
        </div>
        <div className="flex justify-center mb-3">
          <div className="flex space-x-2">
            <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center">
              <span className="text-white text-xs">📧</span>
            </div>
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white text-xs">💬</span>
            </div>
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-xs">📱</span>
            </div>
          </div>
        </div>
        <div className="text-center mb-3">
          <div className="text-xs text-gray-500">Downstream - CS</div>
        </div>
        <div className="flex justify-center space-x-2">
          <div className="w-6 h-6 bg-red-500 rounded flex items-center justify-center">
            <span className="text-white text-xs">A</span>
          </div>
          <div className="w-6 h-6 bg-green-500 rounded flex items-center justify-center">
            <span className="text-white text-xs">📊</span>
          </div>
          <div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center">
            <span className="text-white text-xs">H</span>
          </div>
        </div>
      </div>
    )
  };

  return (
    <motion.div
      className={cn("relative", className)}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      data-testid={`service-mockup-${type}`}
    >
      {mockups[type]}
    </motion.div>
  );
}