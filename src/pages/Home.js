import React from 'react';
import Section from '../components/Section';
import ThemeToggle from '../components/ThemeToggle';
import PhotoGallery from '../components/PhotoGallery';
import NewsSection from '../components/NewsSection';


function Home() {
  return (
    <main className="container">
      <ThemeToggle />

      <h1 className="main-title">Parque Ecológico Danilo Marques Moura</h1>

      <Section title="Origem e Inspiração">
        <p>Antes do início do desenvolvimento do Parque Ecológico Danilo Marques Moura, a constante exploração da área gerava um grande desequilíbrio ambiental. A quantidade de moradores inseridos próximos à área, que exploravam a madeira e abatiam os animais fazia com que o local estivesse muito desgastado, o que foi constatado mais tarde pelo biólogo contratado. Além disso, havia uma vasta infestação de cobras e formigas, o que tornava o ambiente muito perigoso.</p>
        <p>O nome do parque foi colocado em homenagem ao herói da Segunda Guerra Mundial, Danilo Marques Moura, oficial da Força Aérea Brasileira que sobreviveu a um pouso de paraquedas e a uma caminhada de aproximadamente 389 km até a base dos Aliados após ser abatido na Itália em 1945. Ele se tornou piloto civil e, mais tarde, fazendeiro em Goioerê, onde permaneceu sendo morador até a data de sua morte, em 14 de maio de 1990. Danilo também foi quem cedeu o terreno do parque ao município, que, reconhecendo sua contribuição, batizou o local com seu nome.</p>
      </Section>

      <Section title="Construção e Desenvolvimento">
        <p>A idealização do Parque Ecológico ocorreu por volta de 1990, e seu desenvolvimento iniciou-se na mesma época, com a contratação de Bruno Domingo de Angeles, biólogo e professor na Universidade Estadual de Maringá (UEM), contratado para fazer o reconhecimento da área e o projeto do parque.</p>
        <p>Depois de concluído o projeto, iniciaram-se as construções. As primeiras trilhas foram implantadas em 1990. A melhor forma de combater o desequilíbrio ambiental que ali havia era cercando o parque e fazendo um reflorestamento, e foi isso que o técnico agrícola do município, Mauro Maximiano, juntamente com os demais contratados fizeram inicialmente. Na criação das trilhas, o técnico ia na frente enquanto os mateiros vinham andando atrás, abrindo a trilha por onde passavam e desviando das árvores maiores.</p>
        <p>Profissionais do Instituto Butantan foram chamados para fazer uma coleta de parte das cobras que ali haviam, que, por falta de predadores naturais, se proliferaram demais e representavam um risco aos futuros visitantes. Animais como o macaco-prego e o quati sempre estiveram lá. Entretanto, acabou-se o período de mandato do prefeito na época, e durante a gestão seguinte, não houve nenhum investimento, fazendo com que as construções e melhorias no parque ficassem estagnadas.</p>
        <p>Entre 1996 e 1999 o viveiro de mudas foi construído, sendo que já existia numa área particular cedida para a prefeitura, portanto, foi colocado lá para facilitar a logística e administração da área ambiental em um só espaço. As calçadas também foram reformadas durante essa época.</p>
        <p>A próxima revitalização do Parque Ecológico ocorreu entre 2021 e 2022, onde foram melhorados diversos aspectos, como as calçadas, o viveiro e as pontes. O viveiro de mudas já distribuiu milhões de plantas, contribuindo para planos de arborização da cidade, reflorestamentos e diversos outros fins.</p>
      </Section>

      <Section title="Importância Ecológica e Social">
        <p>Hoje, contanto com aproximadamente 27,7 hectares (sendo cerca de 24 hectares de mata nativa) o parque Ecológico, além de ser um ponto turístico especial da cidade tanto para turistas quanto moradores, é muito usado pelas escolas e universidades para estudos relacionados a biologia, destacando a importância das constantes manutenções e o valor ambiental que o parque agrega ao município de Goioerê.</p>
      </Section>

<Section title="Notícias">
  <NewsSection />
</Section>

<Section title="Galeria de Fotos">
  <PhotoGallery />
  <p>(Você pode adicionar uma galeria de imagens futuramente aqui)</p>
</Section>

      <Section title="Contato e Localização">
        <p><strong>Secretaria do Meio Ambiente</strong></p>
        <p>WhatsApp: <a href="https://wa.me/5500000000000" target="_blank" rel="noreferrer">Clique para conversar</a></p>
<div style={{ marginTop: '1rem' }}>
  <iframe
    title="Localização do Parque Ecológico Danilo Marques Moura"
    width="100%"
    height="350"
    style={{ border: 0 }}
    loading="lazy"
    allowFullScreen
    referrerPolicy="no-referrer-when-downgrade"
    src="https://www.google.com/maps?q=-24.189960764453815,-53.04631593916285&z=17&output=embed"
  ></iframe>
</div>
      </Section>
    </main>
  );
}

export default Home;

