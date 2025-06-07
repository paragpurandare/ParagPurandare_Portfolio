import type { Express } from "express";
import { createServer, type Server } from "http";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function registerRoutes(app: Express): Promise<Server> {
  // Resume download endpoint
  app.get("/api/resume/download", (req, res) => {
    try {
      // Path to the resume PDF in attached assets
      const resumePath = path.join(__dirname, "..", "attached_assets", "Parag_Purandare_Resume (2) (1)_1749285836321.pdf");
      
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', 'attachment; filename="Parag_Purandare_Resume.pdf"');
      
      // Send the file
      res.sendFile(resumePath, (err) => {
        if (err) {
          console.error("Error sending resume file:", err);
          res.status(404).json({ message: "Resume file not found" });
        }
      });
    } catch (error) {
      console.error("Error handling resume download:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
