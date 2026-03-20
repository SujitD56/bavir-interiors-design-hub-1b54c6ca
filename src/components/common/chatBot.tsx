import { useState, useEffect } from "react"
import { MessageCircle, X, Send, User, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useLeadModal } from "@/context/LeadContext"

export const ChatBot = () => {
  const [open, setOpen] = useState(false)
  const [showWelcome, setShowWelcome] = useState(false)
  const [messages, setMessages] = useState([
    { id: 1, type: 'bot', text: "👋 Hi! Welcome to Bavir Interiors. How can we help you transform your space today?" }
  ])
  const [showOptions, setShowOptions] = useState(true)
  const { openLeadModal } = useLeadModal()

  useEffect(() => {
    const timer = setTimeout(() => setShowWelcome(true), 5000)
    return () => clearTimeout(timer)
  }, [])

  const handleOptionClick = (option: string) => {
    setShowOptions(false)
    const userMsg = { id: Date.now(), type: 'user', text: option }
    setMessages(prev => [...prev, userMsg])

    // bot response logic
    setTimeout(() => {
      let botText = ""
      if (option.includes("Consultation")) {
        botText = "Great choice! Our designers are ready to help. Click the button below to book your free session."
      } else if (option.includes("Residential")) {
        botText = "We specialize in luxury residential designs, from 2BHKs to Villas. Would you like to see our portfolio or talk to an expert?"
      } else {
        botText = "I'd be happy to help with that! Let's connect you with our design team for more details."
      }
      
      const botMsg = { id: Date.now() + 1, type: 'bot', text: botText }
      setMessages(prev => [...prev, botMsg])
    }, 1000)
  }

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end gap-3">
      {/* WhatsApp Button (Round & Small) */}
      <AnimatePresence>
        {!open && (
          <motion.a
            href="https://wa.me/917676457919?text=Hello%20Bavir%20Interiors!%20I'm%20interested%20in%20your%20design%20services%20and%20looking%20for%20a%20consultation."
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.8 }}
            className="w-12 h-12 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-[#128C7E] transition-all flex items-center justify-center group no-underline"
            title="Chat on WhatsApp"
          >
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </motion.a>
        )}
      </AnimatePresence>

      {/* Chat Popup */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="w-80 rounded-2xl bg-white shadow-2xl border border-border overflow-hidden flex flex-col"
          >
            <div className="bg-foreground text-background px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-bronze/20 flex items-center justify-center">
                  <User size={16} className="text-bronze" />
                </div>
                <div>
                  <p className="font-medium text-sm">Bavir Assistant</p>
                  <p className="text-[10px] text-background/60">Online • Help Center</p>
                </div>
              </div>
              <button onClick={() => setOpen(false)} className="text-background/60 hover:text-background transition-colors">
                <X size={20} />
              </button>
            </div>

            <div className="p-4 h-80 overflow-y-auto bg-secondary/5 space-y-4">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex gap-2 ${msg.type === 'user' ? 'flex-row-reverse' : ''}`}>
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${msg.type === 'bot' ? 'bg-bronze/10 text-bronze' : 'bg-foreground text-background'}`}>
                    {msg.type === 'bot' ? <User size={14} /> : <div className="text-[8px] font-bold">You</div>}
                  </div>
                  <div className={`p-3 rounded-2xl shadow-sm text-[11px] leading-relaxed max-w-[80%]
                    ${msg.type === 'bot' ? 'bg-white rounded-tl-none text-muted-foreground' : 'bg-foreground text-background rounded-tr-none'}
                  `}>
                    {msg.text}
                  </div>
                </div>
              ))}

              {showOptions && (
                <div className="space-y-2 ml-9">
                  {[
                    "🏠 Residential Interiors",
                    "🏢 Commercial Spaces",
                    "✨ Book a Consultation"
                  ].map((opt) => (
                    <button
                      key={opt}
                      onClick={() => handleOptionClick(opt)}
                      className="w-full text-left px-4 py-2 bg-white border border-border/50 rounded-xl text-[10px] font-medium hover:border-bronze hover:text-bronze transition-all flex items-center justify-between group"
                    >
                      {opt}
                      <ChevronRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="p-4 bg-white border-t">
              <button 
                onClick={() => {
                  setOpen(false)
                  openLeadModal('ChatBot')
                }}
                className="w-full bg-bronze text-white py-3 rounded-xl font-heading text-sm hover:bg-bronze/90 transition-all shadow-md active:scale-95 flex items-center justify-center gap-2"
              >
                Connect with our Experts <Send size={14} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Bot Button (Round) */}
      <button
        onClick={() => {
          setOpen(!open)
          setShowWelcome(false)
        }}
        className={`h-14 w-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 relative
          ${open ? 'bg-white text-foreground' : 'bg-foreground text-background hover:rotate-12'}
        `}
      >
        {open ? <X size={24} /> : <MessageCircle size={26} />}
        
        {!open && (
          <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-bronze text-[10px] font-bold text-white flex items-center justify-center animate-bounce">
            1
          </span>
        )}
      </button>

      {/* Welcome Bubble (Fixed position) */}
      <AnimatePresence>
        {showWelcome && !open && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="absolute bottom-16 right-0 bg-white px-4 py-2 rounded-2xl shadow-xl border border-border text-[10px] whitespace-nowrap font-medium"
          >
            👋 Connect with our Experts!
            <div className="absolute bottom-[-6px] right-6 w-3 h-3 bg-white border-r border-b border-border rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
