import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  MessageCircle, 
  Search, 
  Filter,
  Paperclip,
  Send,
  CheckCheck,
  Clock,
  Star,
  User
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

const communications = [
  {
    id: 1,
    type: "geral",
    subject: "Reunião de Pais - Dezembro 2024",
    sender: "Secretaria",
    date: "Hoje, 14:30",
    content: "Informamos que a reunião de pais será realizada no dia 15/12/2024, às 19h no auditório da escola. Por favor, confirmar presença até 10/12.",
    priority: "high",
    read: false,
    hasAttachment: true
  },
  {
    id: 2,
    type: "turma",
    subject: "Prova de Matemática - 7º Ano",
    sender: "Prof. Fernanda Silva",
    date: "Hoje, 10:15",
    content: "A prova de matemática será na próxima sexta-feira (08/12). Conteúdo: Capítulos 3 e 4 do livro. Estudem as equações de primeiro grau.",
    priority: "medium",
    read: false,
    hasAttachment: false
  },
  {
    id: 3,
    type: "individual",
    subject: "Parabenização - Ana",
    sender: "Prof. Carlos Mendes",
    date: "Ontem, 16:45",
    content: "Gostaria de parabenizar a Ana pelo excelente desempenho na apresentação de ciências. Ela demonstrou muito conhecimento e dedicação!",
    priority: "low",
    read: true,
    hasAttachment: false
  }
]

const Communication = () => {
  const [selectedTab, setSelectedTab] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [newMessage, setNewMessage] = useState("")

  const filteredCommunications = communications.filter(comm => {
    const matchesSearch = comm.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         comm.sender.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesTab = selectedTab === "all" || comm.type === selectedTab
    return matchesSearch && matchesTab
  })

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "text-red-600 bg-red-50"
      case "medium": return "text-yellow-600 bg-yellow-50"
      default: return "text-green-600 bg-green-50"
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "geral": return "bg-education-primary text-white"
      case "turma": return "bg-education-secondary text-white"
      default: return "bg-education-info text-white"
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold text-foreground">Comunicação</h1>
        <p className="text-muted-foreground">Central de mensagens e comunicados da escola</p>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Buscar comunicados..." 
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Button variant="outline" className="sm:w-auto">
          <Filter className="h-4 w-4 mr-2" />
          Filtros
        </Button>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="sm:w-auto bg-education-primary hover:bg-education-primary/90">
              <MessageCircle className="h-4 w-4 mr-2" />
              Nova Mensagem
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Nova Mensagem</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <Input placeholder="Destinatário (professor ou secretaria)" />
              <Input placeholder="Assunto" />
              <Textarea 
                placeholder="Digite sua mensagem..." 
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                rows={4}
              />
              <div className="flex justify-between items-center">
                <Button variant="outline" size="sm">
                  <Paperclip className="h-4 w-4 mr-2" />
                  Anexar Arquivo
                </Button>
                <Button className="bg-education-primary hover:bg-education-primary/90">
                  <Send className="h-4 w-4 mr-2" />
                  Enviar
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Communication Tabs */}
      <Tabs value={selectedTab} onValueChange={setSelectedTab}>
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="all">Todos</TabsTrigger>
          <TabsTrigger value="geral">Gerais</TabsTrigger>
          <TabsTrigger value="turma">Turma</TabsTrigger>
          <TabsTrigger value="individual">Individuais</TabsTrigger>
        </TabsList>

        <TabsContent value={selectedTab} className="space-y-4">
          {filteredCommunications.map((comm) => (
            <Card key={comm.id} className={`cursor-pointer transition-all hover:shadow-md ${!comm.read ? 'border-education-primary/50 bg-education-primary/5' : ''}`}>
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback className={getTypeColor(comm.type)}>
                        {comm.sender.split(' ').map(n => n[0]).join('').substring(0, 2)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <CardTitle className="text-base">{comm.subject}</CardTitle>
                        {!comm.read && <div className="h-2 w-2 rounded-full bg-education-primary"></div>}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span>{comm.sender}</span>
                        <span>•</span>
                        <span>{comm.date}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className={getPriorityColor(comm.priority)}>
                      {comm.priority === 'high' ? 'Alta' : comm.priority === 'medium' ? 'Média' : 'Baixa'}
                    </Badge>
                    <Badge className={getTypeColor(comm.type)}>
                      {comm.type === 'geral' ? 'Geral' : comm.type === 'turma' ? 'Turma' : 'Individual'}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">{comm.content}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    {comm.hasAttachment && (
                      <div className="flex items-center gap-1">
                        <Paperclip className="h-3 w-3" />
                        <span>Anexo</span>
                      </div>
                    )}
                    <div className="flex items-center gap-1">
                      {comm.read ? <CheckCheck className="h-3 w-3" /> : <Clock className="h-3 w-3" />}
                      <span>{comm.read ? 'Lida' : 'Não lida'}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm">
                      <Star className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      Responder
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total de Mensagens</p>
                <p className="text-2xl font-bold">28</p>
              </div>
              <MessageCircle className="h-8 w-8 text-education-primary" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Não Lidas</p>
                <p className="text-2xl font-bold text-education-warning">3</p>
              </div>
              <Clock className="h-8 w-8 text-education-warning" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Respondidas</p>
                <p className="text-2xl font-bold text-education-success">15</p>
              </div>
              <CheckCheck className="h-8 w-8 text-education-success" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Communication