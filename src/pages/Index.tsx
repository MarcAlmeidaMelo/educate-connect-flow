import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Calendar, BarChart3, BookOpen, Smartphone, Users } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-education.jpg";

const Index = () => {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-lg bg-gradient-to-r from-education-primary/10 to-education-secondary/10 p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-education-primary to-education-secondary bg-clip-text text-transparent">
              EscolaConnect
            </h1>
            <p className="text-xl text-muted-foreground">
              Plataforma completa de comunicação escolar para pais e responsáveis
            </p>
            <p className="text-muted-foreground">
              Acompanhe o desenvolvimento acadêmico, receba comunicados em tempo real e mantenha-se conectado com a escola através de nossa plataforma intuitiva.
            </p>
            <div className="flex gap-4">
              <Button asChild size="lg" className="bg-education-primary hover:bg-education-primary/90">
                <Link to="/dashboard">
                  <BarChart3 className="mr-2 h-4 w-4" />
                  Acessar Dashboard
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/comunicacao">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Ver Mensagens
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <img 
              src={heroImage} 
              alt="Ambiente educacional moderno" 
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="text-center hover:shadow-md transition-shadow">
          <CardHeader>
            <MessageCircle className="h-12 w-12 mx-auto text-education-primary" />
            <CardTitle>Comunicação</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Central de mensagens com professores e escola
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="text-center hover:shadow-md transition-shadow">
          <CardHeader>
            <Calendar className="h-12 w-12 mx-auto text-education-secondary" />
            <CardTitle>Agenda</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Eventos, provas e atividades escolares
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="text-center hover:shadow-md transition-shadow">
          <CardHeader>
            <BarChart3 className="h-12 w-12 mx-auto text-education-info" />
            <CardTitle>Desempenho</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Gráficos e relatórios de notas detalhados
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="text-center hover:shadow-md transition-shadow">
          <CardHeader>
            <Smartphone className="h-12 w-12 mx-auto text-education-success" />
            <CardTitle>WhatsApp</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Notificações automáticas importantes
            </CardDescription>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
