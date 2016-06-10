import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import DocumentTitle from 'react-document-title'
import { config } from 'config'
import Logo from './_logo'
import POINTS from './_points'
import PATHS from './_renderedPaths7.json'

import 'style/main.less'
import './paint.less'

export default class Index extends React.Component {
    constructor() {
        super();
        this.state = {
            activePath: undefined
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(path) {
        this.setState({activePath: path});
    }
    render () {
        const pathList = PATHS.uniques.map((path) => {
            const boundClick = this.handleClick.bind(null, path)
            const className = 'paint-list_item' + ((this.state.activePath === path) ? ' paint-list_item--active' : '')

            return (
                <li key={path}
                        onClick={boundClick}
                        className={className}>
                    {path}
                </li>
            )
        })

        const activePath = (this.state.activePath) ? this.state.activePath.join('') : 'nothing'

        return (
            <DocumentTitle title={config.siteTitle}>
                <div>
                    <h1>Malen, Timo.</h1>
                    selected: {activePath}

                    <Logo className="tb_logo"
                            points={POINTS}
                            order={this.state.activePath}
                            size={200}
                            margin={20}
                            showLabels={false} />
                    <ul className="paint-list">
                        {pathList}
                    </ul>
                </div>
            </DocumentTitle>
        )
    }
}
