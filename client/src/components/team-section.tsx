import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Mail } from "lucide-react";
import hectorFabioPhoto from "@assets/Imagen1_1757085400538.jpg";
import luisEmirPhoto from "@assets/foto luis_1757085600963.jpg";
import luisMariaPhoto from "@assets/Imagen de PP_1757087341434.jpg";

export default function TeamSection() {
  const teamMembers = [
    {
      name: "Luis Emir Castañeda",
      position: "Director General y Fundador",
      description: "Líder visionario con formación en sistemas, diseño gráfico y telecomunicaciones. Fundador de INTEGRAR S.A.S., integra automatización con inteligencia artificial, diseño modular y comunicación visual en procesos institucionales. Su enfoque combina excelencia técnica, ética territorial y mentoría estratégica.",
      image: luisEmirPhoto,
      alt: "Luis Emir Castañeda - Director General y Fundador"
    },
    {
      name: "Hector Fabio Grisales Ocampo",
      position: "Director de Transformación y Marketing Estratégico",
      description: "Administrador de Empresas con especialización en Marketing Estratégico y Máster en Logística y Comercio Internacional. Con más de tres décadas de experiencia, ha liderado procesos de transformación digital, estructuración organizacional y posicionamiento institucional en sectores como seguridad, salud, educación, turismo e industria.",
      image: hectorFabioPhoto,
      alt: "Hector Fabio Grisales Ocampo - Director de Transformación y Marketing Estratégico"
    },
    {
      name: "Luis María Castañeda Blanco",
      position: "Director de Desarrollo Institucional y Educativo",
      description: "Educador colombiano con una destacada trayectoria en el fortalecimiento institucional, la formación docente y la investigación educativa. Ha ejercido como profesor en Escuelas Normales y Colegios, docente universitario, asesor pedagógico, investigador organizacional y supervisor de educación en el Departamento del Valle del Cauca, donde impulsó procesos de mejora continua, articulación territorial y desarrollo curricular.",
      image: luisMariaPhoto,
      alt: "Luis María Castañeda Blanco - Director de Desarrollo Institucional y Educativo"
    }
  ];

  const stats = [
    { value: "50+", label: "Proyectos Completados" },
    { value: "8", label: "Años de Experiencia" },
    { value: "25+", label: "Clientes Satisfechos" },
    { value: "100%", label: "Compromiso" }
  ];

  return (
    <section id="equipo" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl" data-testid="text-team-title">
            Equipo Estratégico
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-team-description">
            Profesionales expertos comprometidos con la excelencia y la transformación organizacional
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="shadow-lg overflow-hidden hover-lift">
              <img 
                src={member.image} 
                alt={member.alt}
                className="w-full h-64 object-cover"
                data-testid={`img-team-member-${index + 1}`}
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-card-foreground" data-testid={`text-team-member-${index + 1}-name`}>
                  {member.name}
                </h3>
                <p className="text-primary font-medium mb-2" data-testid={`text-team-member-${index + 1}-position`}>
                  {member.position}
                </p>
                <p className="text-muted-foreground text-sm mb-4" data-testid={`text-team-member-${index + 1}-description`}>
                  {member.description}
                </p>
                <div className="flex space-x-2">
                  <button className="text-primary hover:text-blue-700" data-testid={`link-team-member-${index + 1}-linkedin`}>
                    <Linkedin className="h-5 w-5" />
                  </button>
                  <button className="text-primary hover:text-blue-700" data-testid={`link-team-member-${index + 1}-email`}>
                    <Mail className="h-5 w-5" />
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Team Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-3xl font-bold text-primary mb-2" data-testid={`text-stat-${index + 1}-value`}>
                {stat.value}
              </div>
              <p className="text-muted-foreground" data-testid={`text-stat-${index + 1}-label`}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
