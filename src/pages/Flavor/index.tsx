import React, { useEffect, useState, useCallback } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import { Container, Content, FlavorButton, NextButton } from './styles';
import api from '../../services/api';

import FlavorFormat from '../../interfaces/Flavor';

const Flavor: React.FC = () => {
  const history = useHistory();

  const [flavors, setFlavors] = useState<FlavorFormat[]>([]);
  const [flavorSelected, setFlavorSelected] = useState<number>();

  useEffect(() => {
    api.get('/flavors').then((response) => setFlavors(response.data));
  }, []);

  const handleFlavor = useCallback((id: number) => {
    setFlavorSelected(id);
  }, []);

  const handleClick = useCallback(() => {
    if (!flavorSelected) {
      toast.error('Selecione o sabor do seu açaí');
    } else {
      history.push(`/flavor/${flavorSelected}/size/`);
    }
  }, [history, flavorSelected]);

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

      <NextButton onClick={handleClick}>
        Próximo <FiChevronRight color="#1E1E24" size={18} />
      </NextButton>
    </Container>
  );
};

export default Flavor;
