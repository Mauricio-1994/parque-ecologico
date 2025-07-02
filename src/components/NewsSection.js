import React from 'react';
import './NewsSection.css';
import { useTranslation } from 'react-i18next';

const newsItems = [
  {
    title: 'Semana do Meio Ambiente 2025',
    date: '03/06/2025',
    description: 'Atividades educativas, trilhas guiadas e plantio de mudas no parque. Aberto ao público.',
    link: '#'
  },
  {
    title: 'Mutirão de Limpeza da Trilha Principal',
    date: '15/04/2025',
    description: 'Voluntários se reuniram para limpar e revitalizar os caminhos do parque ecológico.',
    link: '#'
  }
];

function NewsSection() {
  const { t } = useTranslation();

  return (
    <section className="section">
      <h2 className="section-title">{t('news.title')}</h2>
      <div className="news-grid">
        {newsItems.map((item, index) => (
          <div key={index} className="news-card">
            <h3>{item.title}</h3>
            <p className="news-date">{item.date}</p>
            <p>{item.description}</p>
            {item.link && <a href={item.link}>Saiba mais</a>}
          </div>
        ))}
      </div>
    </section>
  );
}

export default NewsSection;
