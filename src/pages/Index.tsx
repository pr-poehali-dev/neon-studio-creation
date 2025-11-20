import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const teamMembers = [
    {
      name: 'Александр Неонов',
      role: 'Главный звукорежиссёр',
      icon: 'Mic',
      description: 'Профессиональная озвучка более 10 лет'
    },
    {
      name: 'Мария Волна',
      role: 'Голосовой актёр',
      icon: 'Radio',
      description: 'Широкий диапазон голоса и эмоций'
    },
    {
      name: 'Дмитрий Саунд',
      role: 'Звукоинженер',
      icon: 'Headphones',
      description: 'Мастеринг и постобработка звука'
    }
  ];

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0B0F17] text-white overflow-x-hidden">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0B0F17]/80 backdrop-blur-md border-b border-cyan-500/20">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold neon-glow">NEON STUDIO</h1>
          <div className="flex gap-6">
            {['home', 'team', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`text-sm uppercase tracking-wider transition-all hover:text-cyan-400 ${
                  activeSection === section ? 'text-cyan-400 neon-glow' : 'text-gray-400'
                }`}
              >
                {section === 'home' ? 'Главная' : section === 'team' ? 'Команда' : 'Контакты'}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex flex-col items-center justify-center relative pt-20 px-6">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#FF00CC]/10 rounded-full blur-[150px]"></div>
          <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#00F5FF]/10 rounded-full blur-[150px]"></div>
        </div>

        <div className="relative z-10 text-center animate-fade-in">
          <div className="mb-12 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[600px] h-[400px] border-2 border-cyan-500/30 rounded-full animate-pulse-glow neon-border"></div>
            </div>
            
            <img 
              src="https://cdn.poehali.dev/projects/7e74e4c7-e8f3-4cdd-8036-5f0f9c83f1aa/files/7c24a475-94c5-4633-a3d8-a4399098f069.jpg"
              alt="Neon Studio"
              className="relative z-10 w-full max-w-2xl mx-auto rounded-lg neon-border"
            />
          </div>

          <h2 className="text-6xl font-black mb-6 neon-glow">
            NEON STUDIO
          </h2>
          <p className="text-xl text-cyan-300 mb-4">Профессиональная озвучка в киберпанк стиле</p>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Мы создаём звуковые миры будущего. Каждый проект — это путешествие в неоновую вселенную звука.
          </p>
          
          <div className="flex gap-4 justify-center flex-wrap">
            <Button 
              onClick={() => scrollToSection('team')}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-8 py-6 text-lg neon-border"
            >
              <Icon name="Users" className="mr-2" size={20} />
              Наша команда
            </Button>
            <Button 
              onClick={() => scrollToSection('contact')}
              variant="outline"
              className="border-2 border-[#FF00CC] text-[#FF00CC] hover:bg-[#FF00CC]/10 px-8 py-6 text-lg neon-border-magenta"
            >
              <Icon name="Mail" className="mr-2" size={20} />
              Связаться
            </Button>
          </div>
        </div>

        <div className="absolute bottom-10 animate-bounce">
          <Icon name="ChevronDown" className="text-cyan-400" size={32} />
        </div>
      </section>

      <section id="team" className="min-h-screen py-24 px-6 relative">
        <div className="container mx-auto">
          <h2 className="text-5xl font-black text-center mb-4 neon-glow-magenta animate-fade-in">
            КОМАНДА
          </h2>
          <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
            Профессионалы звукорежиссуры и озвучки с многолетним опытом
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card 
                key={index}
                className="bg-[#1a1f2c]/50 border-2 border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 backdrop-blur-sm hover:neon-border animate-slide-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center neon-border">
                    <Icon name={member.icon as any} size={40} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-cyan-300">{member.name}</h3>
                  <p className="text-[#FF00CC] font-semibold mb-4">{member.role}</p>
                  <p className="text-gray-400 text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="min-h-screen py-24 px-6 relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-[#0066FF]/10 rounded-full blur-[200px]"></div>
        </div>

        <div className="container mx-auto max-w-2xl relative z-10">
          <h2 className="text-5xl font-black text-center mb-4 neon-glow animate-fade-in">
            КОНТАКТЫ
          </h2>
          <p className="text-center text-gray-400 mb-16">
            Свяжитесь с нами для обсуждения вашего проекта
          </p>

          <Card className="bg-[#1a1f2c]/50 border-2 border-[#FF00CC]/20 hover:border-[#FF00CC]/50 transition-all backdrop-blur-sm neon-border-magenta">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-cyan-300">Имя</label>
                  <Input 
                    placeholder="Ваше имя"
                    className="bg-[#0B0F17] border-cyan-500/30 focus:border-cyan-500 text-white placeholder:text-gray-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-cyan-300">Email</label>
                  <Input 
                    type="email"
                    placeholder="your@email.com"
                    className="bg-[#0B0F17] border-cyan-500/30 focus:border-cyan-500 text-white placeholder:text-gray-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-cyan-300">Сообщение</label>
                  <Textarea 
                    placeholder="Расскажите о вашем проекте..."
                    rows={5}
                    className="bg-[#0B0F17] border-cyan-500/30 focus:border-cyan-500 text-white placeholder:text-gray-500 resize-none"
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#FF00CC] to-[#00F5FF] hover:from-[#FF00CC]/80 hover:to-[#00F5FF]/80 text-white py-6 text-lg font-bold neon-border"
                >
                  <Icon name="Send" className="mr-2" size={20} />
                  Отправить
                </Button>
              </form>

              <div className="mt-8 pt-8 border-t border-cyan-500/20">
                <div className="flex justify-center gap-6">
                  <a href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                    <Icon name="Mail" size={24} />
                  </a>
                  <a href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                    <Icon name="Phone" size={24} />
                  </a>
                  <a href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                    <Icon name="MessageCircle" size={24} />
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-[#0B0F17] border-t border-cyan-500/20 py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Neon Studio. Все права защищены.
          </p>
          <p className="text-cyan-500/50 text-xs mt-2 neon-glow">
            Звуки будущего уже здесь
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
