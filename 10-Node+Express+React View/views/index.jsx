import React, { Component } from 'react';
import DefaultLayout from './default'

class Index extends Component {
    render() {
        return (
            <DefaultLayout title={this.props.title}>
                <div className="container">
                    <a href="todos">View Todos</a>
                </div>
            </DefaultLayout>
        );
    }
}

export default Index;