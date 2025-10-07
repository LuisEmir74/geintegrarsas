import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ContactForm {
  nombre: string;
  empresa: string;
  email: string;
  telefono: string;
  servicio: string;
  mensaje: string;
}

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactForm>({
    nombre: "",
    empresa: "",
    email: "",
    telefono: "",
    servicio: "",
    mensaje: ""
  });

  const handleInputChange = (field: keyof ContactForm, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.nombre || !formData.email || !formData.mensaje) {
      toast({
        title: "Error",
        description: "Por favor completa todos los campos obligatorios.",
        variant: "destructive"
      });
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "¡Mensaje enviado!",
          description: "Gracias por contactarnos. Te responderemos pronto.",
        });
        
        // Reset form
        setFormData({
          nombre: "",
          empresa: "",
          email: "",
          telefono: "",
          servicio: "",
          mensaje: ""
        });
      } else {
        throw new Error('Error al enviar el mensaje');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Hubo un problema al enviar tu mensaje. Inténtalo de nuevo.",
        variant: "destructive"
      });
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Dirección",
      details: "Carrera 83C 46 - 31\nCali, Valle del Cauca, Colombia"
    },
    {
      icon: Phone,
      title: "Teléfono",
      details: "+57 310 848 9825"
    },
    {
      icon: Mail,
      title: "Correo",
      details: "geintegrarsas@gmail.com"
    }
  ];

  return (
    <section id="contacto" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl" data-testid="text-contact-title">
            Contacto
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-contact-description">
            ¿Listo para transformar tu organización? Contáctanos para una consulta personalizada
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-card-foreground mb-6" data-testid="text-form-title">
                Envíanos un Mensaje
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="nombre" className="block text-sm font-medium text-card-foreground mb-2">
                      Nombre *
                    </Label>
                    <Input
                      type="text"
                      id="nombre"
                      value={formData.nombre}
                      onChange={(e) => handleInputChange("nombre", e.target.value)}
                      required
                      data-testid="input-nombre"
                    />
                  </div>
                  <div>
                    <Label htmlFor="empresa" className="block text-sm font-medium text-card-foreground mb-2">
                      Empresa
                    </Label>
                    <Input
                      type="text"
                      id="empresa"
                      value={formData.empresa}
                      onChange={(e) => handleInputChange("empresa", e.target.value)}
                      data-testid="input-empresa"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email" className="block text-sm font-medium text-card-foreground mb-2">
                    Correo Electrónico *
                  </Label>
                  <Input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                    data-testid="input-email"
                  />
                </div>
                
                <div>
                  <Label htmlFor="telefono" className="block text-sm font-medium text-card-foreground mb-2">
                    Teléfono
                  </Label>
                  <Input
                    type="tel"
                    id="telefono"
                    value={formData.telefono}
                    onChange={(e) => handleInputChange("telefono", e.target.value)}
                    data-testid="input-telefono"
                  />
                </div>
                
                <div>
                  <Label htmlFor="servicio" className="block text-sm font-medium text-card-foreground mb-2">
                    Servicio de Interés
                  </Label>
                  <Select value={formData.servicio} onValueChange={(value) => handleInputChange("servicio", value)}>
                    <SelectTrigger data-testid="select-servicio">
                      <SelectValue placeholder="Selecciona un servicio" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="licitaciones">Asesoría en Licitaciones</SelectItem>
                      <SelectItem value="automatizacion">Automatización de Procesos</SelectItem>
                      <SelectItem value="consultoria">Consultoría Institucional</SelectItem>
                      <SelectItem value="ia">Integración de IA</SelectItem>
                      <SelectItem value="otro">Otro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="mensaje" className="block text-sm font-medium text-card-foreground mb-2">
                    Mensaje *
                  </Label>
                  <Textarea
                    id="mensaje"
                    rows={4}
                    value={formData.mensaje}
                    onChange={(e) => handleInputChange("mensaje", e.target.value)}
                    required
                    data-testid="textarea-mensaje"
                  />
                </div>
                
                <Button
                  type="submit"
                  className="w-full px-6 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:bg-blue-700 transition-colors"
                  data-testid="button-submit-form"
                >
                  Enviar Mensaje
                  <Mail className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>
          
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-card-foreground mb-6" data-testid="text-contact-info-title">
                  Información de Contacto
                </h3>
                
                <div className="space-y-4">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <div key={index} className="flex items-start">
                        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                          <Icon className="text-primary-foreground h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-card-foreground" data-testid={`text-contact-info-${index + 1}-title`}>
                            {info.title}
                          </h4>
                          <p className="text-muted-foreground whitespace-pre-line" data-testid={`text-contact-info-${index + 1}-details`}>
                            {info.details}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <i className="fab fa-whatsapp text-white"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-card-foreground" data-testid="text-whatsapp-title">WhatsApp</h4>
                      <p className="text-muted-foreground" data-testid="text-whatsapp-number">+57 315 573 6200</p>
                    </div>
                  </div>
                </div>
                
                {/* Social Media */}
                <div className="mt-8 pt-8 border-t border-border">
                  <h4 className="font-semibold text-card-foreground mb-4" data-testid="text-social-title">Síguenos</h4>
                  <div className="flex space-x-4">
                    <button className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors" data-testid="link-facebook">
                      <i className="fab fa-facebook-f"></i>
                    </button>
                    <button className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-colors" data-testid="link-twitter">
                      <i className="fab fa-twitter"></i>
                    </button>
                    <button className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center text-white hover:bg-blue-900 transition-colors" data-testid="link-linkedin">
                      <i className="fab fa-linkedin-in"></i>
                    </button>
                    <button className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center text-white hover:bg-pink-700 transition-colors" data-testid="link-instagram">
                      <i className="fab fa-instagram"></i>
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Google Maps Placeholder */}
            <Card className="shadow-lg overflow-hidden">
              <div className="p-4">
                <h4 className="font-semibold text-card-foreground mb-2" data-testid="text-map-title">Nuestra Ubicación</h4>
              </div>
              <div className="h-64 bg-muted flex items-center justify-center" data-testid="map-container">
                <div className="text-center">
                  <MapPin className="text-4xl text-muted-foreground mb-2 h-12 w-12 mx-auto" />
                  <p className="text-muted-foreground" data-testid="text-map-placeholder">Mapa de Google Maps</p>
                  <p className="text-sm text-muted-foreground" data-testid="text-map-location">Cali, Valle del Cauca</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
