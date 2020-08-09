import React, { useEffect, useState, useCallback } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { useParams, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import { Container, Content, SizeButton, NextButton } from './styles';
import api from '../../services/api';

import SizeFormat from '../../interfaces/Size';

const Size: React.FC = () => {
  const { idFlavor } = useParams();
  const history = useHistory();

  const [sizes, setSizes] = useState<SizeFormat[]>([]);
  const [sizeSelected, setSizeSelected] = useState<number>();

  useEffect(() => {
    api.get('/sizes').then((response) => setSizes(response.data));
  }, []);

  const handleSize = useCallback((id: number) => {
    setSizeSelected(id);
  }, []);

  const handleClick = useCallback(() => {
    if (!sizeSelected) {
      toast.error('Selecione o tamanho do seu açaí');
    } else {
      history.push(`/flavor/${idFlavor}/size/${sizeSelected}`);
    }
  }, [history, sizeSelected, idFlavor]);

  return (
    <Container>
      <h1>Escolha o tamanho do seu açaí</h1>

      <Content>
        {sizes.map((size) => (
          <SizeButton
            key={size.id}
            selected={sizeSelected === size.id}
            onClick={() => handleSize(size.id)}
          >
            {size.size}
          </SizeButton>
        ))}
      </Content>

      <NextButton onClick={handleClick}>
        Próximo <FiChevronRight color="#1E1E24" size={18} />
      </NextButton>
    </Container>
  );
};

export default Size;
