import React from 'react'
import MenuItem from './MenuItem'
import MenuTree from './MenuTree'

export default props => (
    <ul className='sidebar-menu'>
        <MenuItem path='#/' icon='dashboard' label='Dashboard' />
        <MenuTree icon='edit' label='Cadastro'>
            <MenuItem path='#billingCycles' icon='usd' label='Ciclo de Pagamentos'/>
        </MenuTree>
    </ul>
)