import { Button } from "@/components/ui/button";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const services = [
    { id: "servicios", label: "Asesoría en Licitaciones" },
    { id: "servicios", label: "Automatización" },
    { id: "servicios", label: "Consultoría" },
    { id: "integrabot", label: "INTEGRABOT" }
  ];

  const links = [
    { id: "quienes-somos", label: "Quiénes Somos" },
    { id: "equipo", label: "Equipo" },
    { id: "portafolio", label: "Portafolio" },
    { id: "blog", label: "Blog" },
    { id: "contacto", label: "Contacto" }
  ];

  const socialLinks = [
    { icon: "fab fa-facebook-f", label: "Facebook" },
    { icon: "fab fa-twitter", label: "Twitter" },
    { icon: "fab fa-linkedin-in", label: "LinkedIn" },
    { icon: "fab fa-instagram", label: "Instagram" }
  ];

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4" data-testid="text-footer-title">INTEGRAR S.A.S.</h3>
            <p className="text-blue-100 mb-4" data-testid="text-footer-description">
              Transformamos organizaciones mediante soluciones modulares, automatizadas y visuales. 
              Especialistas en automatización, IA y consultoría institucional.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <button
                  key={index}
                  className="text-blue-200 hover:text-white transition-colors"
                  data-testid={`link-footer-social-${index + 1}`}
                >
                  <i className={social.icon}></i>
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4" data-testid="text-footer-services-title">Servicios</h4>
            <ul className="space-y-2 text-blue-100">
              {services.map((service, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(service.id)}
                    className="hover:text-white transition-colors text-left"
                    data-testid={`link-footer-service-${index + 1}`}
                  >
                    {service.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4" data-testid="text-footer-links-title">Enlaces</h4>
            <ul className="space-y-2 text-blue-100">
              {links.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="hover:text-white transition-colors text-left"
                    data-testid={`link-footer-${index + 1}`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-blue-400 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-100 text-sm" data-testid="text-footer-copyright">
            © 2024 Grupo Empresarial INTEGRAR S.A.S. Todos los derechos reservados.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <button className="text-blue-100 hover:text-white transition-colors text-sm" data-testid="link-privacy">
              Política de Privacidad
            </button>
            <button className="text-blue-100 hover:text-white transition-colors text-sm" data-testid="link-terms">
              Términos de Uso
            </button>
            <button className="text-blue-100 hover:text-white transition-colors text-sm" data-testid="link-legal">
              Aviso Legal
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
