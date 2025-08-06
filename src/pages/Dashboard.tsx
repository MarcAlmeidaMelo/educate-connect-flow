import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  MessageCircle, 
  Calendar, 
  TrendingUp, 
  Bell, 
  BookOpen,
  Clock,
  CheckCircle,
  AlertTriangle
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const Dashboard = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground">Acompanhe o desenvolvimento da Ana em tempo real</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="border-l-4 border-l-education-primary">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Mensagens Não Lidas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-education-primary">3</span>
              <MessageCircle className="h-4 w-4 text-education-primary" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-education-secondary">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Próximos Eventos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-education-secondary">2</span>
              <Calendar className="h-4 w-4 text-education-secondary" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-education-success">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Média Geral</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-education-success">8.7</span>
              <TrendingUp className="h-4 w-4 text-education-success" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-education-warning">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Faltas no Mês</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-education-warning">1</span>
              <Clock className="h-4 w-4 text-education-warning" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Communications */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5 text-education-primary" />
              Comunicados Recentes
            </CardTitle>
            <CardDescription>Últimas mensagens da escola</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-3 p-3 rounded-lg bg-muted/50">
              <Avatar className="h-8 w-8">
                <AvatarFallback className="bg-education-primary text-white text-xs">PF</AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Prof. Fernanda - Matemática</span>
                  <Badge variant="secondary">Hoje</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Prova de matemática na próxima sexta-feira. Estudar capítulos 3 e 4.
                </p>
              </div>
            </div>

            <div className="flex gap-3 p-3 rounded-lg bg-muted/50">
              <Avatar className="h-8 w-8">
                <AvatarFallback className="bg-education-secondary text-white text-xs">SE</AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Secretaria</span>
                  <Badge variant="secondary">Ontem</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Reunião de pais no dia 15/12. Confirmar presença até 10/12.
                </p>
              </div>
            </div>

            <div className="flex gap-3 p-3 rounded-lg bg-muted/50">
              <Avatar className="h-8 w-8">
                <AvatarFallback className="bg-education-info text-white text-xs">PC</AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Prof. Carlos - Educação Física</span>
                  <Badge variant="secondary">2 dias</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Trazer uniforme de educação física na próxima aula.
                </p>
              </div>
            </div>

            <Button variant="outline" className="w-full">
              Ver Todas as Mensagens
            </Button>
          </CardContent>
        </Card>

        {/* Quick Actions & Agenda */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Ações Rápidas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="outline" className="w-full justify-start">
                <MessageCircle className="h-4 w-4 mr-2" />
                Nova Mensagem
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Calendar className="h-4 w-4 mr-2" />
                Ver Agenda
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <BookOpen className="h-4 w-4 mr-2" />
                Boletim Escolar
              </Button>
            </CardContent>
          </Card>

          {/* Today's Schedule */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-education-primary" />
                Agenda de Hoje
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-education-primary"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Matemática</p>
                  <p className="text-xs text-muted-foreground">07:30 - 08:20</p>
                </div>
                <CheckCircle className="h-4 w-4 text-education-success" />
              </div>

              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-education-secondary"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Português</p>
                  <p className="text-xs text-muted-foreground">08:20 - 09:10</p>
                </div>
                <CheckCircle className="h-4 w-4 text-education-success" />
              </div>

              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-education-info"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Ed. Física</p>
                  <p className="text-xs text-muted-foreground">09:30 - 10:20</p>
                </div>
                <Clock className="h-4 w-4 text-education-warning" />
              </div>

              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-education-accent"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">História</p>
                  <p className="text-xs text-muted-foreground">10:40 - 11:30</p>
                </div>
                <AlertTriangle className="h-4 w-4 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Notifications Bar */}
      <Card className="bg-gradient-to-r from-education-primary/5 to-education-secondary/5 border-education-primary/20">
        <CardContent className="p-4">
          <div className="flex items-center gap-3">
            <Bell className="h-5 w-5 text-education-primary" />
            <div className="flex-1">
              <p className="text-sm font-medium">Notificações WhatsApp Ativas</p>
              <p className="text-xs text-muted-foreground">
                Você receberá alertas importantes no WhatsApp +55 11 99999-9999
              </p>
            </div>
            <Button size="sm" variant="outline">
              Configurar
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Dashboard