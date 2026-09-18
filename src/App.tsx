import { Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "@/pages/Index";
import People from "@/pages/People";
import Publications from "@/pages/Publications";
import Resources from "@/pages/Resources";
import Laboratorio from "@/pages/Laboratorio";
import AlemDaPesquisa from "@/pages/AlemDaPesquisa";
import NotFound from "@/pages/NotFound";

function App() {
  return (
    <TooltipProvider>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/people" element={<People />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/laboratorio" element={<Laboratorio />} />
        <Route path="/alem-da-pesquisa" element={<AlemDaPesquisa />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </TooltipProvider>
  );
}

export default App;
