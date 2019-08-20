import React from 'react';
import { Link } from 'gatsby';
import classNames from 'classnames';
import Illustration from '../Illustration';

import style from './style.module.less';

export default class Footer extends React.Component {
    render() {
        const { next, prev } = this.props;

        return (
            <footer className={style.container_outer}>
                <div className={style.container}>
                    {prev && (
                        <Link to={prev.fields.slug} className={style.nextPrev_link}>
                            <div className={style.nextPrev_label}>vorheriges</div>
                            <div className={style.nextPrev_title}>{prev.frontmatter.title}</div>
                        </Link>
                    )}
                    <div className={style.content}>
                        {/*
                        <a
                            href="https://www.facebook.com/timo.becker.54"
                            className={style.icon}
                            title="Facebook"
                            target="_blank"
                        >
                            <Illustration illustration="icons_facebook" />
                        </a>
                        */}
                        <a
                            href="https://de.linkedin.com/in/timobecker-design"
                            className={style.icon}
                            title="LinkedIn"
                            target="_blank"
                        >
                            <Illustration illustration="icons_linkedin" />
                        </a>
                        {/*
                        <a
                            href="https://www.artstation.com/artist/timo_becker"
                            className={style.icon}
                            title="ArtStation"
                            target="_blank"
                        >
                            <Illustration illustration="icons_artstation" />
                        </a>
                        */}
                        <a
                            href="https://www.instagram.com/timo_becker_/"
                            className={style.icon}
                            title="Instagram"
                            target="_blank"
                        >
                            <Illustration illustration="icons_instagram" />
                        </a>
                        <a href="mailto:mail@timobecker.com" className={style.icon} title="Mail">
                            <Illustration illustration="icons_mail" />
                        </a>
                        <a
                            href="http://volligohne.de/projekte/timobecker/"
                            className={style.icon}
                            title="Völlig Ohne"
                            target="_blank"
                        >
                            <Illustration illustration="icons_vo" />
                        </a>
                        <Link to="/impressum/" className={style.icon} title="Impressum / Kontakt">
                            <Illustration illustration="icons_impressum" />
                        </Link>
                    </div>
                    {next && (
                        <Link to={next.fields.slug} className={style.nextPrev_link}>
                            <div className={style.nextPrev_label}>nächstes</div>
                            <div className={style.nextPrev_title}>{next.frontmatter.title}</div>
                        </Link>
                    )}
                </div>
                <div className={style.vo_hint}>
                    website by <a href="http://volligohne.de/projekte/timobecker/">völlig ohne</a>
                </div>
            </footer>
        );
    }
}
