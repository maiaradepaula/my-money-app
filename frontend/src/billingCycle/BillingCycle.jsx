import React, { Component } from 'react'
import  { bindActionCreators    } from 'redux'
import { connect } from 'react-redux'


import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Tabs from '../common/tabs/tabs'
import TabContent from '../common/tabs/tabContent'
import TabHeader from '../common/tabs/tabHeader'
import TabsHeader from '../common/tabs/tabsHeader'
import TabsContent from '../common/tabs/tabsContent'
import { selectTab, showTabs } from '../common/tabs/tabActions'


//import { init, create, update, remove } from './billingCycleActions'

import List from './billingCycleList'
//import Form from './billingCycleForm'

class BillingCycle extends Component {

    componentWillMount() {
        this.props.selectTab('tabList ')
        this.props.showTabs('tabList', 'tabCreate' )
    }

    render() {
        return (
            <div> 
                <ContentHeader title='Ciclos de Pagamentos' small='Cadastro' />
                <Content> 
                    <Tabs> 
                        <TabsHeader> 
                            <TabHeader label='Listar' icon='bars' target='tabList' />
                            <TabHeader label='Incluir' icon='plus' target='tabCreate' />
                            <TabHeader label='Alterar' icon='pencil' target='tabUpdate' />
                            <TabHeader label='Excluir' icon='trash-o' target='tabDelete' />
                        </TabsHeader> 
                        <TabsContent> 
                            <TabContent id='tabList'>
                               <List />
                            </TabContent>
                            <TabContent id='tabCreate'>
                                 
                            </TabContent>
                            <TabContent id='tabUpdate'>
                                {/* <Form onSubmit={this.props.update}
                                    submitLabel='Alterar' submitClass='info' /> */}
                            </TabContent>
                            <TabContent id='tabDelete'>
                                {/* <Form onSubmit={this.props.remove} readOnly={true}
                                    submitLabel='Excluir' submitClass='danger' /> */}
                            </TabContent>
                        </TabsContent> 
                    </Tabs> 
                </Content> 
            </div> 
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({selectTab, showTabs}, dispatch)
export default connect (null, mapDispatchToProps) (BillingCycle)