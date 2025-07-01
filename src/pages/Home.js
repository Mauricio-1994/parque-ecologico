import React from 'react';
import Section from '../components/Section';

function Home() {
  return (
    <>
      <Section title="Origem e Inspiração">
        <p>
          (Conte aqui como surgiu a ideia do parque, o papel da comunidade, da prefeitura ou de Danilo Marques Moura)
        </p>
      </Section>

      <Section title="Construção e Desenvolvimento">
        <p>
          (Detalhe o processo de construção, desafios, parcerias e inauguração)
        </p>
      </Section>

      <Section title="Importância Ecológica e Social">
        <p>
          (Fale sobre a flora, fauna, projetos ambientais, eventos culturais, educação ambiental etc.)
        </p>
      </Section>

      <Section title="Galeria de Fotos">
        <p>
          (Você pode adicionar uma galeria de imagens futuramente aqui)
        </p>
      </Section>

      <Section title="Contato e Localização">
        <p>
          (Informações de contato, links para redes sociais, mapas etc.)
        </p>
      </Section>
    </>
  );
}

export default Home;
