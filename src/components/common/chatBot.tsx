import { useState } from "react"
import { MessageCircle, X } from "lucide-react"

export const ChatBot = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Chat Popup */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-80 rounded-xl bg-white shadow-2xl border">
          <div className="flex items-center justify-between px-4 py-3 border-b">
            <span className="font-medium text-sm">Chat with us</span>
            <button onClick={() => setOpen(false)}>
              <X size={18} />
            </button>
          </div>

          <div className="p-4 text-sm text-gray-600">
            👋 Hi! How can we help you today?
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg hover:bg-blue-700 transition"
      >
        <MessageCircle size={26} />

        {/* Notification badge */}
        {!open && (
          <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-red-500 text-[10px] font-bold text-white flex items-center justify-center">
            1
          </span>
        )}
      </button>
    </>
  )
}
