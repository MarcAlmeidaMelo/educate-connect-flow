import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "@/components/ui/calendar"
import { 
  Calendar as CalendarIcon, 
  Clock,
  MapPin,
  User,
  BookOpen,
  AlertCircle,
  Download,
  Filter
} from "lucide-react"
import { format, addDays, isSameDay } from "date-fns"
import { pt } from "date-fns/locale"

const events = [
  {
    id: 1,
    title: "Prova de Matemática",
    type: "prova",
    date: new Date(2024, 11, 6), // December 6, 2024
    time: "08:00 - 09:30",
    location: "Sala 15",
    teacher: "Prof. Fernanda Silva",
    description: "Avaliação sobre equações de primeiro grau e geometria básica",
    materials: ["Calculadora", "Lápis", "Borracha"]
  },
  {
    id: 2,
    title: "Entrega do Trabalho de Ciências",
    type: "trabalho",
    date: new Date(2024, 11, 8), // December 8, 2024
    time: "07:30",
    location: "Laboratório",
    teacher: "Prof. Roberto Santos",
    description: "Apresentação do projeto sobre Sistema Solar",
    materials: ["Projeto impresso", "Maquete"]
  },
  {
    id: 3,
    title: "Reunião de Pais",
    type: "reuniao",
    date: new Date(2024, 11, 15), // December 15, 2024
    time: "19:00 - 21:00",
    location: "Auditório",
    teacher: "Coordenação",
    description: "Apresentação dos resultados do 4º bimestre",
    materials: []
  },
  {
    id: 4,
    title: "Passeio - Museu de Ciências",
    type: "passeio",
    date: new Date(2024, 11, 20), // December 20, 2024
    time: "08:00 - 17:00",
    location: "Museu de Ciências",
    teacher: "Prof. Roberto Santos",
    description: "Visita educativa ao planetário e exposições interativas",
    materials: ["Lanche", "Garrafa de água", "Uniforme da escola"]
  },
  {
    id: 5,
    title: "Formatura 7º Ano",
    type: "evento",
    date: new Date(2024, 11, 22), // December 22, 2024
    time: "19:00 - 22:00",
    location: "Ginásio",
    teacher: "Coordenação",
    description: "Cerimônia de formatura do ensino fundamental",
    materials: ["Traje social"]
  }
]

const Schedule = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date())
  const [viewType, setViewType] = useState<"calendar" | "list">("calendar")

  const getEventsForDate = (date: Date) => {
    return events.filter(event => isSameDay(event.date, date))
  }

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case "prova": return "bg-red-100 text-red-800 border-red-200"
      case "trabalho": return "bg-blue-100 text-blue-800 border-blue-200"
      case "reuniao": return "bg-purple-100 text-purple-800 border-purple-200"
      case "passeio": return "bg-green-100 text-green-800 border-green-200"
      case "evento": return "bg-yellow-100 text-yellow-800 border-yellow-200"
      default: return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getEventTypeIcon = (type: string) => {
    switch (type) {
      case "prova": return <AlertCircle className="h-4 w-4" />
      case "trabalho": return <BookOpen className="h-4 w-4" />
      case "reuniao": return <User className="h-4 w-4" />
      case "passeio": return <MapPin className="h-4 w-4" />
      case "evento": return <CalendarIcon className="h-4 w-4" />
      default: return <CalendarIcon className="h-4 w-4" />
    }
  }

  const getEventTypeName = (type: string) => {
    switch (type) {
      case "prova": return "Prova"
      case "trabalho": return "Trabalho"
      case "reuniao": return "Reunião"
      case "passeio": return "Passeio"
      case "evento": return "Evento"
      default: return "Atividade"
    }
  }

  const selectedDateEvents = getEventsForDate(selectedDate)
  const upcomingEvents = events
    .filter(event => event.date >= new Date())
    .sort((a, b) => a.date.getTime() - b.date.getTime())
    .slice(0, 5)

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold text-foreground">Agenda Escolar</h1>
        <p className="text-muted-foreground">Acompanhe os eventos, provas e atividades da Ana</p>
      </div>

      {/* View Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex gap-2">
          <Button 
            variant={viewType === "calendar" ? "default" : "outline"}
            onClick={() => setViewType("calendar")}
            className="w-full sm:w-auto"
          >
            <CalendarIcon className="h-4 w-4 mr-2" />
            Calendário
          </Button>
          <Button 
            variant={viewType === "list" ? "default" : "outline"}
            onClick={() => setViewType("list")}
            className="w-full sm:w-auto"
          >
            <BookOpen className="h-4 w-4 mr-2" />
            Lista
          </Button>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="w-full sm:w-auto">
            <Filter className="h-4 w-4 mr-2" />
            Filtros
          </Button>
          <Button variant="outline" className="w-full sm:w-auto">
            <Download className="h-4 w-4 mr-2" />
            Exportar
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Calendar/List View */}
        <div className="lg:col-span-2">
          {viewType === "calendar" ? (
            <Card>
              <CardHeader>
                <CardTitle>Calendário - Dezembro 2024</CardTitle>
                <CardDescription>Clique em uma data para ver os eventos</CardDescription>
              </CardHeader>
              <CardContent>
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={(date) => date && setSelectedDate(date)}
                  locale={pt}
                  className="rounded-md border"
                  modifiers={{
                    hasEvents: events.map(event => event.date)
                  }}
                  modifiersStyles={{
                    hasEvents: { 
                      backgroundColor: 'hsl(213 100% 45% / 0.1)',
                      color: 'hsl(213 100% 45%)',
                      fontWeight: 'bold'
                    }
                  }}
                />
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardHeader>
                <CardTitle>Lista de Eventos</CardTitle>
                <CardDescription>Todos os próximos eventos em ordem cronológica</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="flex gap-4 p-4 rounded-lg border bg-card">
                    <div className="flex flex-col items-center min-w-[60px]">
                      <span className="text-sm text-muted-foreground">
                        {format(event.date, "MMM", { locale: pt })}
                      </span>
                      <span className="text-2xl font-bold">
                        {format(event.date, "dd")}
                      </span>
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-2">
                        <Badge className={getEventTypeColor(event.type)}>
                          {getEventTypeIcon(event.type)}
                          <span className="ml-1">{getEventTypeName(event.type)}</span>
                        </Badge>
                      </div>
                      <h3 className="font-semibold">{event.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {event.time}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {event.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <User className="h-3 w-3" />
                          {event.teacher}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">{event.description}</p>
                      {event.materials.length > 0 && (
                        <div className="flex flex-wrap gap-1">
                          {event.materials.map((material, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {material}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Selected Date Events */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">
                {format(selectedDate, "dd 'de' MMMM", { locale: pt })}
              </CardTitle>
              <CardDescription>
                {selectedDateEvents.length > 0 
                  ? `${selectedDateEvents.length} evento(s) neste dia`
                  : "Nenhum evento neste dia"
                }
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {selectedDateEvents.length > 0 ? (
                selectedDateEvents.map((event) => (
                  <div key={event.id} className="p-3 rounded-lg border bg-muted/50">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className={getEventTypeColor(event.type)} variant="outline">
                        {getEventTypeIcon(event.type)}
                        <span className="ml-1">{getEventTypeName(event.type)}</span>
                      </Badge>
                    </div>
                    <h4 className="font-medium mb-1">{event.title}</h4>
                    <div className="space-y-1 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {event.time}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {event.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        {event.teacher}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-sm text-muted-foreground text-center py-4">
                  Não há eventos para esta data
                </p>
              )}
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Estatísticas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Próximas provas</span>
                <Badge className="bg-red-100 text-red-800">2</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Trabalhos pendentes</span>
                <Badge className="bg-blue-100 text-blue-800">1</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Eventos especiais</span>
                <Badge className="bg-green-100 text-green-800">3</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Sync Options */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Sincronização</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="outline" className="w-full justify-start text-sm">
                <CalendarIcon className="h-4 w-4 mr-2" />
                Google Calendar
              </Button>
              <Button variant="outline" className="w-full justify-start text-sm">
                <CalendarIcon className="h-4 w-4 mr-2" />
                Outlook Calendar
              </Button>
              <Button variant="outline" className="w-full justify-start text-sm">
                <CalendarIcon className="h-4 w-4 mr-2" />
                Apple Calendar
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Schedule