import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bot, Check, Play, Send } from "lucide-react";

interface ChatMessage {
  id: string;
  text: string;
  isBot: boolean;
}

export default function IntegraBotSection() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "1",
      text: "¡Hola! Soy INTEGRABOT, tu asistente virtual. ¿En qué puedo ayudarte hoy?",
      isBot: true
    },
    {
      id: "2",
      text: "¿Qué servicios ofrecen?",
      isBot: false
    },
    {
      id: "3",
      text: "Ofrecemos automatización de procesos, asesoría en licitaciones, consultoría institucional e integración de IA. ¿Te interesa algún servicio específico?",
      isBot: true
    }
  ]);

  const [newMessage, setNewMessage] = useState("");

  const features = [
    "Procesamiento de Lenguaje Natural",
    "Comprende y responde consultas complejas en español.",
    "Integración Multicanal",
    "Funciona en web, WhatsApp, Telegram y otros canales.",
    "Aprendizaje Continuo",
    "Mejora constantemente con cada interacción."
  ];

  const showBotDemo = () => {
    const demoMessage: ChatMessage = {
      id: Date.now().toString(),
      text: "¡Perfecto! Te puedo ayudar con automatización de procesos, análisis de licitaciones o consultoría. ¿Qué necesitas específicamente?",
      isBot: true
    };
    setMessages(prev => [...prev, demoMessage]);
  };

  const sendMessage = () => {
    if (!newMessage.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      text: newMessage,
      isBot: false
    };

    setMessages(prev => [...prev, userMessage]);
    setNewMessage("");

    // Simulate bot response
    setTimeout(() => {
      const botResponse: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: "Gracias por tu consulta. Un especialista se pondrá en contacto contigo para brindarte información detallada sobre nuestros servicios.",
        isBot: true
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <section id="integrabot" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div className="fade-in">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4">
                <Bot className="text-xl text-primary-foreground h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl" data-testid="text-integrabot-title">
                INTEGRABOT
              </h2>
            </div>
            <p className="text-lg text-muted-foreground mb-6" data-testid="text-integrabot-description">
              Nuestro asistente virtual inteligente diseñado para automatizar procesos, responder consultas y brindar soporte 24/7 a tu organización.
            </p>
            
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => {
                if (index % 2 === 0) {
                  return (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                        <Check className="text-green-600 h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-card-foreground" data-testid={`text-integrabot-feature-${Math.floor(index / 2) + 1}-title`}>
                          {feature}
                        </h4>
                        <p className="text-muted-foreground text-sm" data-testid={`text-integrabot-feature-${Math.floor(index / 2) + 1}-description`}>
                          {features[index + 1]}
                        </p>
                      </div>
                    </div>
                  );
                }
                return null;
              })}
            </div>
            
            <Button onClick={showBotDemo} className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:bg-blue-700 transition-colors" data-testid="button-show-demo">
              <Play className="mr-2 h-4 w-4" />
              Ver Demostración
            </Button>
          </div>
          
          <div className="mt-10 lg:mt-0">
            <Card className="max-w-md mx-auto shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    <Bot className="text-primary-foreground h-5 w-5" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-card-foreground" data-testid="text-chatbot-title">INTEGRABOT</h3>
                    <p className="text-sm text-green-600" data-testid="status-online">• En línea</p>
                  </div>
                </div>
                
                <div className="space-y-3 h-64 overflow-y-auto bg-muted p-3 rounded-lg mb-4" data-testid="chat-messages">
                  {messages.map((message) => (
                    <div key={message.id} className={message.isBot ? "flex items-start space-x-2" : "flex justify-end"}>
                      {message.isBot && (
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                          <Bot className="text-primary-foreground h-4 w-4" />
                        </div>
                      )}
                      <div className={`p-3 rounded-lg shadow-sm max-w-xs ${message.isBot ? 'bg-card' : 'bg-primary'}`}>
                        <p className={`text-sm ${message.isBot ? 'text-card-foreground' : 'text-primary-foreground'}`} data-testid={`chat-message-${message.id}`}>
                          {message.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="flex space-x-2">
                  <Input
                    type="text"
                    placeholder="Escribe tu mensaje..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="flex-1"
                    data-testid="input-chat-message"
                  />
                  <Button onClick={sendMessage} className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-blue-700 transition-colors" data-testid="button-send-message">
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
