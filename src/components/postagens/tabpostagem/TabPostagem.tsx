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
                    <Tabs centered indicatorColor="secondary" onChange={handleChange} className= 'color3'>
                        <Tab label="Todas as postagens" value="1" className='color3'/>
                        <Tab label="Sobre nós" value="2" className='color3'/>
                    </Tabs>
                </AppBar>
                <TabPanel value="1" >
                    <Box display="flex" flexWrap="wrap" justifyContent="center">
                        <ListaPostagem />
                    </Box>
                </TabPanel>
                <TabPanel value="2">
                    <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo">
                    </Typography>
                    <Typography variant="body1" gutterBottom color="textPrimary" align="justify">• O que significa BEYHIVE? O termo surgiu da união das palavras Beyoncé + Beehive (colmeia, em inglês). Os fãs costumam chamar a cantora de Queen B - queen significa rainha e a pronúncia do B em inglês é semelhante à pronúncia da palavra abelha (bee). Sendo assim, o trocadilho com abelha rainha - a abelha líder de sua colmeia - ajudou a definir o nome dado aos fãs da diva.
                    </Typography>
                    <Typography>
                    • Qualquer pessoa pode participar? Preciso pagar algo?
                    Sim, qualquer pessoa, de qualquer idade, de todos os lugares do Brasil, pode participar do BEYHIVE. E aí vem uma das melhores partes: você não precisa pagar nada! É grátis! Sua privacidade é muito importante e, para mantê-la, asseguramos que qualquer informação sua jamais será compartilhada sem prévia autorização.


                    </Typography>
                </TabPanel>
            </TabContext>
        </>
    );
}
export default TabPostagem;