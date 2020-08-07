import React, { useEffect, useState, useCallback } from 'react';
import { FiChevronRight } from 'react-icons/fi';

// import formatValue from '../../utils/formatValue';

import { Container, Content, FlavorButton, NextButton } from './styles';
import api from '../../services/api';

interface FlavorFormat {
  id: number;
  flavor: string;
}

const Flavor: React.FC = () => {
  const [flavors, setFlavors] = useState<FlavorFormat[]>([]);
  const [flavorSelected, setFlavorSelected] = useState<number>();

  useEffect(() => {
    api.get('/flavors').then((response) => setFlavors(response.data));
  }, []);

  const handleFlavor = useCallback((id: number) => {
    setFlavorSelected(id);
  }, []);

  return (
    <Container>
      <h1>Escolha o sabor do seu açaí</h1>

      <Content>
        {flavors.map((flavor) => (
          <FlavorButton
            key={flavor.id}
            selected={flavorSelected === flavor.id}
            onClick={() => handleFlavor(flavor.id)}
          >
            {flavor.flavor}
          </FlavorButton>
        ))}
      </Content>

      <NextButton>
        Próximo <FiChevronRight color="#1E1E24" size={18} />
      </NextButton>
    </Container>
  );
};

export default Flavor;
