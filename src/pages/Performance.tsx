import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  TrendingUp, 
  TrendingDown, 
  Download,
  Calendar,
  Award,
  Target
} from "lucide-react"
import { Line, LineChart, Bar, BarChart, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts"

// Mock data for charts
const monthlyPerformance = [
  { month: "Mar", matematica: 7.5, portugues: 8.2, ciencias: 8.0, historia: 7.8, geografia: 8.5 },
  { month: "Abr", matematica: 8.0, portugues: 8.5, ciencias: 8.2, historia: 8.0, geografia: 8.3 },
  { month: "Mai", matematica: 8.2, portugues: 8.8, ciencias: 8.5, historia: 8.2, geografia: 8.7 },
  { month: "Jun", matematica: 8.5, portugues: 9.0, ciencias: 8.8, historia: 8.5, geografia: 9.0 },
  { month: "Jul", matematica: 8.7, portugues: 9.2, ciencias: 9.0, historia: 8.7, geografia: 9.2 },
  { month: "Ago", matematica: 8.8, portugues: 9.0, ciencias: 9.2, historia: 8.9, geografia: 9.1 },
  { month: "Set", matematica: 9.0, portugues: 9.3, ciencias: 9.5, historia: 9.0, geografia: 9.3 },
  { month: "Out", matematica: 8.9, portugues: 9.1, ciencias: 9.3, historia: 8.8, geografia: 9.0 },
  { month: "Nov", matematica: 9.1, portugues: 9.4, ciencias: 9.6, historia: 9.2, geografia: 9.4 }
]

const subjectComparison = [
  { subject: "Matemática", ana: 8.9, turma: 8.2 },
  { subject: "Português", ana: 9.4, turma: 8.5 },
  { subject: "Ciências", ana: 9.6, turma: 8.7 },
  { subject: "História", ana: 9.2, turma: 8.1 },
  { subject: "Geografia", ana: 9.4, turma: 8.6 },
  { subject: "Ed. Física", ana: 9.8, turma: 9.0 },
  { subject: "Inglês", ana: 8.7, turma: 8.3 }
]

const skillsRadar = [
  { skill: "Leitura", value: 95 },
  { skill: "Escrita", value: 88 },
  { skill: "Raciocínio Lógico", value: 92 },
  { skill: "Criatividade", value: 85 },
  { skill: "Trabalho em Equipe", value: 90 },
  { skill: "Apresentação", value: 87 }
]

const Performance = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold text-foreground">Desempenho Acadêmico</h1>
        <p className="text-muted-foreground">Acompanhe o progresso da Ana com gráficos detalhados</p>
      </div>

      {/* Performance Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-br from-education-primary/10 to-education-primary/5">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Média Geral</p>
                <p className="text-2xl font-bold text-education-primary">9.1</p>
                <div className="flex items-center gap-1 text-sm text-education-success">
                  <TrendingUp className="h-3 w-3" />
                  <span>+0.3 este mês</span>
                </div>
              </div>
              <Award className="h-8 w-8 text-education-primary" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Melhor Matéria</p>
                <p className="text-lg font-bold">Ciências</p>
                <p className="text-2xl font-bold text-education-success">9.6</p>
              </div>
              <Target className="h-8 w-8 text-education-success" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Posição na Turma</p>
                <p className="text-2xl font-bold text-education-info">3º</p>
                <p className="text-sm text-muted-foreground">de 28 alunos</p>
              </div>
              <Award className="h-8 w-8 text-education-info" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Frequência</p>
                <p className="text-2xl font-bold text-education-success">97%</p>
                <p className="text-sm text-muted-foreground">3 faltas no ano</p>
              </div>
              <Calendar className="h-8 w-8 text-education-success" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <Tabs defaultValue="evolution" className="space-y-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <TabsList>
            <TabsTrigger value="evolution">Evolução</TabsTrigger>
            <TabsTrigger value="comparison">Comparação</TabsTrigger>
            <TabsTrigger value="skills">Habilidades</TabsTrigger>
          </TabsList>
          <Button variant="outline" className="w-full sm:w-auto">
            <Download className="h-4 w-4 mr-2" />
            Exportar Relatório
          </Button>
        </div>

        <TabsContent value="evolution">
          <Card>
            <CardHeader>
              <CardTitle>Evolução das Notas por Matéria</CardTitle>
              <CardDescription>Acompanhe o progresso ao longo do ano letivo</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={monthlyPerformance}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis domain={[6, 10]} />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="matematica" stroke="hsl(213 100% 45%)" name="Matemática" strokeWidth={2} />
                  <Line type="monotone" dataKey="portugues" stroke="hsl(152 70% 50%)" name="Português" strokeWidth={2} />
                  <Line type="monotone" dataKey="ciencias" stroke="hsl(199 89% 48%)" name="Ciências" strokeWidth={2} />
                  <Line type="monotone" dataKey="historia" stroke="hsl(45 100% 60%)" name="História" strokeWidth={2} />
                  <Line type="monotone" dataKey="geografia" stroke="hsl(32 95% 44%)" name="Geografia" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="comparison">
          <Card>
            <CardHeader>
              <CardTitle>Comparação com a Média da Turma</CardTitle>
              <CardDescription>Desempenho da Ana vs. média da turma do 7º ano</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={subjectComparison}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="subject" angle={-45} textAnchor="end" height={80} />
                  <YAxis domain={[7, 10]} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="ana" fill="hsl(213 100% 45%)" name="Ana" />
                  <Bar dataKey="turma" fill="hsl(152 70% 50%)" name="Média da Turma" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="skills">
          <Card>
            <CardHeader>
              <CardTitle>Perfil de Habilidades</CardTitle>
              <CardDescription>Avaliação qualitativa das competências desenvolvidas</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <RadarChart data={skillsRadar}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="skill" />
                  <PolarRadiusAxis domain={[0, 100]} tickCount={6} />
                  <Radar
                    name="Ana"
                    dataKey="value"
                    stroke="hsl(213 100% 45%)"
                    fill="hsl(213 100% 45%)"
                    fillOpacity={0.1}
                    strokeWidth={2}
                  />
                  <Tooltip />
                </RadarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Recent Evaluations */}
      <Card>
        <CardHeader>
          <CardTitle>Avaliações Recentes</CardTitle>
          <CardDescription>Últimas notas e comentários dos professores</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Badge className="bg-education-primary">Ciências</Badge>
                  <span className="font-medium">Prova - Sistema Solar</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  "Excelente trabalho! Ana demonstrou profundo conhecimento sobre os planetas e suas características."
                </p>
                <p className="text-xs text-muted-foreground">Prof. Roberto - 28/11/2024</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-education-success">9.8</p>
                <div className="flex items-center gap-1 text-sm text-education-success">
                  <TrendingUp className="h-3 w-3" />
                  <span>Melhorou</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Badge className="bg-education-secondary">Português</Badge>
                  <span className="font-medium">Redação - Meio Ambiente</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  "Muito boa argumentação e estrutura textual. Continue desenvolvendo o vocabulário."
                </p>
                <p className="text-xs text-muted-foreground">Prof. Maria - 25/11/2024</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-education-info">9.2</p>
                <div className="flex items-center gap-1 text-sm text-education-info">
                  <TrendingUp className="h-3 w-3" />
                  <span>Estável</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Badge className="bg-education-warning">Matemática</Badge>
                  <span className="font-medium">Trabalho - Equações</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  "Bom raciocínio, mas precisa revisar alguns conceitos básicos de álgebra."
                </p>
                <p className="text-xs text-muted-foreground">Prof. Fernanda - 22/11/2024</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-education-warning">8.5</p>
                <div className="flex items-center gap-1 text-sm text-education-warning">
                  <TrendingDown className="h-3 w-3" />
                  <span>Atenção</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Performance