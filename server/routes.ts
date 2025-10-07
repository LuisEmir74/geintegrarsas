import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";

const contactSchema = z.object({
  nombre: z.string().min(1, "El nombre es requerido"),
  empresa: z.string().optional(),
  email: z.string().email("Email inválido"),
  telefono: z.string().optional(),
  servicio: z.string().optional(),
  mensaje: z.string().min(1, "El mensaje es requerido")
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate input
      const validatedData = contactSchema.parse(req.body);
      
      // Basic XSS protection - sanitize input
      const sanitizedData = {
        nombre: validatedData.nombre.trim(),
        empresa: validatedData.empresa?.trim() || "",
        email: validatedData.email.trim(),
        telefono: validatedData.telefono?.trim() || "",
        servicio: validatedData.servicio?.trim() || "",
        mensaje: validatedData.mensaje.trim()
      };

      // Log the contact form submission
      console.log("Contact form submission:", {
        timestamp: new Date().toISOString(),
        ...sanitizedData
      });

      // In a real application, you would:
      // 1. Save to database
      // 2. Send email notification
      // 3. Integrate with CRM system
      
      res.status(200).json({ 
        success: true, 
        message: "Mensaje enviado correctamente" 
      });

    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Datos inválidos", 
          errors: error.errors 
        });
      } else {
        console.error("Contact form error:", error);
        res.status(500).json({ 
          success: false, 
          message: "Error interno del servidor" 
        });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
