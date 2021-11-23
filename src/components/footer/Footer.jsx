import React from "react";
import "../../style/footer.css";

function Footer() {
    return (
        <footer>
            <div>
                <div className='flex-footer-row'>
                    <div className='footer-logos'>
                        <a
                            href='https://github.com/ObadaElSharbatly/mix-app'
                            target='_blank'
                            rel='noreferrer'
                            title='GitHub'>
                            <i className='bi bi-github'></i>
                        </a>
                        <a
                            href='https://youtube.com/playlist?list=PLoMKCbpTTvvthiSknYuafN-XMhbz-fSlY'
                            target='_blank'
                            rel='noreferrer'
                            title='youtube'>
                            <i className='bi bi-youtube'></i>
                        </a>
                        <a
                            href='https://discord.gg/GXpQ2BUwyv'
                            title='discord'
                            target='_blank'
                            rel='noreferrer'>
                            <i className='bi bi-discord'></i>
                        </a>
                    </div>
                </div>
                <div className='flex-footer-row'>
                    <div className='flex-footer-column'>
                        <h4>Used npm</h4>
                        <ul>
                            <li>
                                <a
                                    href='https://www.npmjs.com/package/uuid'
                                    target='_blank'
                                    rel='noreferrer'>
                                    uuid
                                </a>
                            </li>
                            <li>
                                <a
                                    href='https://www.npmjs.com/package/react-currency-flags'
                                    target='_blank'
                                    rel='noreferrer'>
                                    currency-flags
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className='flex-footer-column'>
                        <h4>Resources</h4>
                        <ul>
                            <li>
                                <a
                                    href='https://icons.getbootstrap.com/'
                                    target='_blank'
                                    rel='noreferrer'>
                                    Logos
                                </a>
                            </li>
                            <li>
                                <a
                                    href='https://fonts.google.com/?selection.family=Audiowide'
                                    target='_blank'
                                    rel='noreferrer'>
                                    Fonts
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className='flex-footer-column'>
                        <h4>API</h4>
                        <ul>
                            <li>
                                <a
                                    href='https://www.exchangerate-api.com/'
                                    target='_blank'
                                    rel='noreferrer'>
                                    Exchange-Rate
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='footer-app-info flex-footer-row'>
                    <h4>App info</h4>
                    <div>
                        <ul className='footer-app-info-items'>
                            <li>
                                <a href='/'>Lorem ipsum</a>
                            </li>
                            <li>
                                <a href='/'>Placeat necessitatibus</a>
                            </li>
                            <li>
                                <a href='/'>Alias eos!</a>
                            </li>
                            <li>
                                <a href='/'>Velit eos?</a>
                            </li>
                            <li>
                                <a href='/'>Accusamus in!</a>
                            </li>
                            <li>
                                <a href='/'>Nobis voluptate</a>
                            </li>
                            <li>
                                <a href='/'>Aperiam perferendis</a>
                            </li>
                            <li>
                                <a href='/'>Quibusdam illo!</a>
                            </li>
                            <li>
                                <a href='/'>Dicta sint?</a>
                            </li>
                            <li>
                                <a href='/'>Deleniti quod</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='flex-footer-row'>
                    <p className='copyrights'>
                        copyrights© created by Obada Nov 2021
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
