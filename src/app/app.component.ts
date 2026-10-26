import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project, SkillCategory, TimelineEntry } from './models/portfolio.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  protected readonly projects = signal<Project[]>([
    {
      number: '01',
      title: 'CIPTEA',
      description:
        'Plataforma completa para solicitação, análise e emissão digital da Carteira de Identificação da Pessoa com TEA.',
      impact: 'Serviço público acessível',
      tags: ['Java', 'Spring', 'Angular', 'PostgreSQL'],
      tone: 'blue',
    },
    {
      number: '02',
      title: 'Corrida do Trabalhador',
      description:
        'Experiência de inscrição online projetada para alta demanda, gestão dos participantes e operação do evento.',
      impact: '800+ inscrições',
      tags: ['Angular', 'REST API', 'Docker'],
      tone: 'lime',
    },
    {
      number: '03',
      title: 'Transparência & Editais',
      description:
        'Ecossistema de publicação e consulta que simplifica o acesso do cidadão a processos e documentos oficiais.',
      impact: '40+ editais publicados',
      tags: ['Spring Boot', 'Angular', 'SQL'],
      tone: 'orange',
    },
    {
      number: '04',
      title: 'Ponto Eletrônico',
      description:
        'Sistema municipal para registro, acompanhamento e gestão segura da jornada de servidores.',
      impact: 'Operação centralizada',
      tags: ['Java', 'OAuth2', 'Keycloak'],
      tone: 'violet',
    },
  ]);

  protected readonly skillCategories = signal<SkillCategory[]>([
    {
      category: 'Backend',
      items: ['Java', 'Spring Boot', 'Spring Security', 'REST APIs', 'JUnit'],
    },
    {
      category: 'Frontend',
      items: ['Angular', 'TypeScript', 'RxJS', 'Signals', 'HTML & CSS'],
    },
    {
      category: 'Infra & Dados',
      items: ['Docker', 'PostgreSQL', 'MySQL', 'Git', 'CI/CD'],
    },
  ]);

  protected readonly timeline = signal<TimelineEntry[]>([
    {
      period: '2021 — agora',
      role: 'Desenvolvedor Full Stack',
      institution: 'Prefeitura de Parnamirim · GCTI',
      description:
        'Desenvolvimento e evolução de sistemas públicos de alta relevância, com foco em segurança, confiabilidade e experiência do cidadão.',
    },
    {
      period: 'Formação',
      role: 'Engenharia de Computação',
      institution: 'Graduação e pós-graduações',
      description:
        'Base técnica multidisciplinar complementada por especializações e aprendizado constante em arquitetura, cloud e produtos digitais.',
    },
    {
      period: 'Comunidade',
      role: 'Mentoria & conhecimento',
      institution: 'Hackathons · Alura · Tecnologia',
      description:
        'Compartilhamento de conhecimento, apoio a novos talentos e participação ativa em iniciativas de inovação.',
    },
  ]);

  protected currentYear = new Date().getFullYear();
}
