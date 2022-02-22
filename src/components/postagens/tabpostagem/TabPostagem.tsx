import React, { useState } from 'react'
import { AppBar, Tab, Tabs, Typography, Box } from '@material-ui/core';
import { TabContext, TabPanel } from '@material-ui/lab';
import ListaPostagem from '../listapostagem/ListaPostagem';
import './TabPostagem.css';

function TabPostagem() {
    const [value, setValue] = useState('1')
    function handleChange(event: React.ChangeEvent<{}>, newValue: string) {
        setValue(newValue);
    }
    return (
<>
            <TabContext value={value}>
                <AppBar position="static">
                    <Tabs centered indicatorColor="secondary" onChange={handleChange}>
                        <Tab label="Todas as postagens" value="1" />
                        <Tab label="Sobre nós" value="2" />
                    </Tabs>
                </AppBar>
                <TabPanel value="1" >
                    <Box display="flex" flexWrap="wrap" justifyContent="center">
                        <ListaPostagem />
                    </Box>
                </TabPanel>
                <TabPanel value="2">
                    <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo">Sobre nós</Typography>
<Typography variant="body1" gutterBottom color="textPrimary" align="justify">Beyoncé é hoje uma das artistas mais importantes da música pop, não apenas pela quantidade de prêmios e hits emplacados, mas principalmente pelo seu discurso de transformação e empoderamento feminino.

Eleita pela revista Forbes uma das mulheres mais poderosas do mundo, Beyoncé é uma artista acostumada a quebrar recordes: foi a primeira mulher a conquistar seis Grammys em uma única edição e, em 2021, se tornou a artista que mais ganhou a premiação na história.

Beyoncé também foi a primeira mulher negra a ser headliner do Coachella. Mas há ainda muitas outras conquistas na trajetória de Beyoncé, que iniciou a sua carreira no Destiny’s Child, grupo do qual fez parte de 1997 até 2003.
Beyoncé Giselle Knowles-Carter é filha da figurinista e hairstyle Tina Knowles e do empresário Mathew Knowles. A maior diva pop dos últimos tempos nasceu em 1981, no dia 4 de setembro, em Houston, no Texas, e tem uma irmã chamada Solange, que é atriz e cantora.
Foi no Texas que passou boa parte de sua infância e adolescência, estudou na Alief Schoology High School e fez aulas de dança na St. Mary’s Elementary School. 

Venceu seu primeiro show de talentos quando tinha apenas 7 anos cantando o sucesso Imagine, de John Lennon. Ali, incentivada pela professora de dança que notou a vocação de Beyoncé, deu  seus primeiros passos rumo a uma carreira brilhante. 

Um ano depois, entrou como solista no coral da igreja St. John’s United Methodist, época em que conheceu outras jovens e juntas decidiram montar o grupo Girl’s Tyme.   
Por conta da notoriedade que a diva já apresentava no Destiny’s Child, começou sua carreira solo com o pé direito na Columbia Records, garantindo um adiantamento de 1,5 milhões de dólares da gravadora.

O primeiro álbum saiu em 2003, Dangerously In Love, emplacando sucessos como Baby Boy e Crazy In Love. Estima-se que o disco tenha vendido 317 mil cópias apenas na semana de lançamento.

O segundo disco veio depois de três anos por conta de projetos paralelos de Beyoncé e suas incursões no cinema. Ela lançou B’Day em 2006, ano em que completou 25 anos e o álbum foi lançado na data de seu aniversário.

Um dos destaques do disco foi o single Déjà Vu e Beautiful Liar na edição Deluxe.</Typography>
</TabPanel>
</TabContext>
</>
);
}
export default TabPostagem;