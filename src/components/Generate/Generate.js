/* eslint-disable no-console */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import DetailsBlog from '../DetailsBlog';
import SwiperPost from './SwiperPost';
import DetailsSwiper from '../DetailsSwiper';
import './Generate.scss';
import HeroImage from '../../assets/assets_generate/HeroImage.webp';
import Lock from '../../assets/assets_generate/Lock.webp';
import Book from '../../assets/assets_generate/Document.webp';
import Cookie from '../../assets/assets_generate/Cookies.webp';
import LineGray from '../../assets/assets_generate/Line_gray.webp';
import LineViolet from '../../assets/assets_generate/Line_violet.webp';
import PaperPlane from '../../assets/assets_generate/Paper_plane.webp';
import Streamline from '../../assets/assets_generate/Group821.png';
import Circle from '../../assets/assets_generate/check_circle.webp'; 
import Lubenda from '../../assets/assets_generate/Lubenda.webp';
import Privacy from '../../assets/assets_generate/CardsPrivacy.png';
import GetTerms from '../../assets/assets_generate/GetTerms.webp';
import Shopify from '../../assets/assets_generate/Shopify.webp';
import cardCircle from '../../assets/assets_generate/cardCircle.webp';
import Text_highlighter from '../../assets/assets_generate/Text_highlighter.webp';
import data from '../../data.json';
import flag from '../../assets/assets_generate/flag.webp';
import Marker from '../../assets/assets_generate/Marker.webp';
import AI from '../../assets/assets_generate/AI.webp';
import GDPR from '../../assets/assets_generate/GDPR.webp';
import Embed from '../../assets/assets_generate/Embed.webp';
import Hosting from '../../assets/assets_generate/Hosted.webp';
import Update from '../../assets/assets_generate/Updated.webp';
import Payment from '../../assets/assets_generate/Payment.webp';
import Compitable from '../../assets/assets_generate/Compatible.webp';
import HTML from '../../assets/assets_generate/HTML.webp';
import Downloads from '../../assets/assets_generate/Downloads.webp';
import Legalsmall from '../../assets/assets_generate/Legal_small.webp';
import Policies from '../../assets/assets_generate/Policies.webp';
import Busines from '../../assets/assets_generate/Business.webp';
import Pageviews from '../../assets/assets_generate/Pageviews.webp';
import Circle_offer from '../../assets/assets_generate/Cicle_offers.webp';
import DetailsProtection from '../DetailsProtection';



const Generate = () => {
  const { t } = useTranslation();
  const posts = data.slice(0, 4);
  const navigate = useNavigate();
  const handleClick=()=> {
    navigate ('/blog');
  };
  return (
    <div className="main">
      <div className="main_background">
        <div className="main_background_tutorial">
          <p className="main_background_tutorial_text">Powered by AI</p>
          <p className="main_background_tutorial_aggrements">{t('generate-tutorial-text')}</p>
          <p className="main_background_tutorial_aggrements_policy">Generate your <span className="main_background_tutorial_aggrements_policy_bolder">Privacy Policy, Terms of Use</span> or <span className="main_tutorial_aggrements_policy_bolder">Cookie Policy </span>for <span className="main_background_tutorial_aggrements_policy_color">free</span> </p>
          <div className="main_background_tutorial_button">
            <button className="main_background_tutorial_button_generate" onClick={handleClick}>{t('generate-forfree')}</button>
            <button className="main_background_tutorial_button_learn">{t('learn')}</button>
          </div>        
        </div>
        <div className="main_background_lock"> <img src={Lock}></img> </div>
        <div className="main_background_page" ><img src={HeroImage}></img></div>
        <div className="main_background_line_violet"><img src={LineViolet}></img></div>
        <div className="main_background_book"><img src={Book}></img></div>
        <div className="main_background_line_gray"><img src={LineGray}></img></div>
        <div className="main_background_cookie"><img src={Cookie}></img></div>
        <div className="main_background_paperplane"><img src={PaperPlane}></img></div>
      </div> 
      <div className="main_tutorial_small">
        <div className="main_tutorial_small_background" style={{backgroundImage:`url(${Marker})`}} ></div>
        <h5>AI-Powered</h5>
        <h1>{t('generate-tutorial-text')}</h1>
        <div className="main_tutorial_small_button">
          <button className="main_tutorial_small_button_generate"onClick={handleClick}>{t('generate')}</button>
          <button className="main_tutorial_small_button_learn"onClick={handleClick}>{t('learn')}</button>
        </div>
      </div>
      <div className="main_streamline_small">
        <div className="main_streamline_small_background"><img src={Streamline} alt="Streamline"></img></div>
        <div className="main_streamline_small_description">
          <p className="main_streamline_small_text_gradient" style={{backgroundImage:`url(${AI})`}}></p>
          <p className="main_streamline_small_description_name">take a look</p>
          <p className="main_streamline_small_description_title">{t('streamline_small_description_title')}</p>
          <p className="main_streamline_small_description_more">{t('streamline_small_description_more')}</p>
          <div className="main_streamline_small_description_detail">
            <div className="main_streamline_small_description_detail_firstPoint">
              <div className="main_streamline_small_description_detail_background"><img src={Circle} alt="Circle"></img></div>
              <div className="main_streamline_small_description_detail_style">{t('streamline_small_description_first')}</div>
            </div>
            <div className="main_streamline_small_description_detail_secondPoint">
              <div className="main_streamline_small_description_detail_background"><img src={Circle} alt="Circle"></img></div>
              <div className="main_streamline_small_description_detail_style">{t('streamline_small_description_second')}</div>
            </div>
            <div className="main_streamline_small_description_detail_thirdPoint">
              <div className="main_streamline_small_description_detail_background"><img src={Circle} alt="Circle"></img></div>
              <div className="main_streamline_small_description_detail_style">{t('streamline_small_description_third')}</div>
            </div>
            <div className="main_streamline_small_description_detail_fourthPoint">
              <div className="main_streamline_small_description_detail_background"><img src={Circle} alt="Circle"></img></div>
              <div className="main_streamline_small_description_detail_style">{t('streamline_small_description_fourth')}</div>
            </div>
            <div className="main_streamline_small_description_detail_fifthPoint">
              <div className="main_streamline_small_description_detail_background"><img src={Circle} alt="Circle"></img></div>
              <div className="main_streamline_small_description_detail_style">{t('streamline_small_description_fifth')}</div>
            </div>
          </div>
          <div className="main_streamline_small_description_button">
            <button className="main_streamline_small_description_button_generate" onClick={handleClick}>
              {t('generate')} 
            </button>
            <button className="main_streamline_small_description_button_learn"onClick={handleClick}>{t('learn')}</button>
          </div>
        </div>
      </div>
      <div className="main_tutorial-streamline">
        <p className="main_tutorial-streamline_text_gradient">AI</p>
        <div className="main_tutorial-streamline_background"><img src={Streamline}></img></div>
        <div className="main_tutorial-streamline_description">
          <p className="main_tutorial-streamline_description_name">discover posibilities</p>
          <p className="main_tutorial-streamline_description_title">{t('streamline-name')}</p>
          <p className="main_tutorial-streamline_description_more">{t('streamline-more')}</p>
          <div className="main_tutorial-streamline_description_detail">
            <div className="main_tutorial-streamline_description_detail_firstPoint">
              <div className="main_tutorial-streamline_description_detail_background"><img src={Circle} alt="Circle"></img></div>
              <div className="main_tutorial-streamline_description_detail_style">{t('streamline-firstPoint')}</div>
            </div>
            <div className="main_tutorial-streamline_description_detail_secondPoint">
              <div className="main_tutorial-streamline_description_detail_background"><img src={Circle} alt="Circle"></img></div>
              <div className="main_tutorial-streamline_description_detail_style">{t('streamline-secondPoint')}</div>
            </div>
            <div className="main_tutorial-streamline_description_detail_thirdthPoint">
              <div className="main_tutorial-streamline_description_detail_background"><img src={Circle} alt="Circle"></img></div>
              <div className="main_tutorial-streamline_description_detail_style">{t('streamline-thirdPoint')}</div>
            </div>
            <div className="main_tutorial-streamline_description_detail_fourthPoint">
              <div className="main_tutorial-streamline_description_detail_background"><img src={Circle} alt="Circle"></img></div>
              <div className="main_tutorial-streamline_description_detail_style">{t('streamline-fourthPoint')}</div>
            </div>
            <div className="main_tutorial-streamline_description_detail_fifthPoint">
              <div className="main_tutorial-streamline_description_detail_background"><img src={Circle} alt="Circle"></img></div>
              <div className="main_tutorial-streamline_description_detail_style">{t('streamline-fifthPoint')}</div>
            </div>
            <div className="main_tutorial-streamline_description_detail_sixthPoint">
              <div className="main_tutorial-streamline_description_detail_background"><img src={Circle} alt="Circle"></img></div>
              <div className="main_tutorial-streamline_description_detail_style">{t('streamline-sixthPoint')}</div>
            </div>
            <div className="main_tutorial-streamline_description_detail_seventhPoint">
              <div className="main_tutorial-streamline_description_detail_background"><img src={Circle} alt="Circle"></img></div>
              <div className="main_tutorial-streamline_description_detail_style">{t('streamline-seventhPoint')}</div>
            </div>
            <div className="main_tutorial-streamline_description_detail_eigthPoint">
              <div className="main_tutorial-streamline_description_detail_background"><img src={Circle} alt="Circle"></img></div>
              <div className="main_tutorial-streamline_description_detail_style">{t('streamline-eigthPoint')}</div>
            </div>
          </div>
          <div className="main_tutorial-streamline_description_button">
            <button className="main_tutorial-streamline_description_button_generate"onClick={handleClick}>
              {t('generate-forfree')}
            </button>
            <button className="main_tutorial-streamline_description_button_learn"onClick={handleClick}>{t('learn')}</button>
          </div>
        </div>
      </div>
      <div className="main_swiper">
        <p className="main_swiper_solution">Solution</p>
        <DetailsSwiper />
      </div> 
      <div className="main_cardPricing">
        <div className="main_cardPricing_detail">
          <p>{t('cardpricing-detail_p')}</p>
          <h2>{t('cardpricing-detail-h2')}</h2>
          <h4>{t('cardpricing-detail-h4')}</h4>
        </div>
        <div className="main_cardPricing_acsess">
          <h2>{t('cardPricing_acsess-h2')}</h2>
          <h5>{t('cardPricing_acsess-h5')}</h5>
        </div>
        <div className="main_cardPricing_background" style={{backgroundImage:`url(${Circle_offer})`}}></div>
        <div className="main_cardPricing_cardLubenda" style={{backgroundImage:`url(${Lubenda})`}}></div>
        <div className="main_cardPricing_cardGetPrivacy"style={{backgroundImage:`url(${Privacy})`}}></div>
        <div className="main_cardPricing_cardGetTerms"style={{backgroundImage:`url(${GetTerms})`}}></div>
        <div className="main_cardPricing_cardShopify"style={{backgroundImage:`url(${Shopify})`}}></div>
        <div className="main_cardPricing_cardPencil"style={{backgroundImage:`url(${Text_highlighter})`}}></div>
        <div className="main_cardPricing_cardCircle"style={{backgroundImage:`url(${cardCircle})`}}></div>
      </div>
      <div className="main_safeguards_small">
        <div className="main_img_small">
          <div>
            <img src={GDPR} alt="GDPR"></img>
            <p>GDPR, CCPA, CalOPPA</p>
          </div>
          <div>
            <img src={Embed} alt="GDPR"></img>
            <p>Easy Embed on Your Site</p>
          </div>
          <div>
            <img src={Hosting} alt="GDPR"></img>
            <p>Securely Hosting Policies</p>
          </div>
          <div>
            <img src={Update} alt="GDPR"></img>
            <p>Frequent Updates</p>
          </div>
          <div>
            <img src={Payment} alt="GDPR"></img>
            <p>Industry-leading pricing</p>
          </div>
          <div>
            <img src={Compitable} alt="GDPR"></img>
            <p>US/EU Law Compatible</p>
          </div>
          <div>
            <img src={HTML} alt="GDPR"></img>
            <p>HTML/Word Formats</p>
          </div>
          <div>
            <img src={Downloads} alt="GDPR"></img>
            <p>Unlimited Downloads</p>
          </div>
        </div>
        <img  className="main_safeguards_small_background" src={Legalsmall}></img>
        <div className="main_safeguards_small_text">
          <h3>{t('safeguards_small_h3')}</h3>
          <h1>{t('safeguards_small_h1')}</h1>
          <h4>{t('safeguards_small_h4')}</h4>
        </div>
        <div className="main_safeguards_small_images">
          <div><img className="main_safeguards_small_policies" src={Policies}></img></div>
          <div><img className="main_safeguards_small_business" src={Busines}></img></div>
          <div><img className="main_safeguards_small_compliant" src={Pageviews}></img></div>
        </div>
      </div>
      <div className="main_safeguards_large">
        <div className="main_img_large">
          <div>
            <img src={GDPR} alt="GDPR"></img>
            <p>GDPR, CCPA, CalOPPA</p>
          </div>
          <div>
            <img src={Embed} alt="GDPR"></img>
            <p>Easy Embed on Your Site</p>
          </div>
          <div>
            <img src={Hosting} alt="GDPR"></img>
            <p>Securely Hosting Policies</p>
          </div>
          <div>
            <img src={Update} alt="GDPR"></img>
            <p>Frequent Updates</p>
          </div>
          <div>
            <img src={Payment} alt="GDPR"></img>
            <p>Industry-leading pricing</p>
          </div>
          <div>
            <img src={Compitable} alt="GDPR"></img>
            <p>US/EU Law Compatible</p>
          </div>
          <div>
            <img src={HTML} alt="GDPR"></img>
            <p>HTML/Word Formats</p>
          </div>
          <div>
            <img src={Downloads} alt="GDPR"></img>
            <p>Unlimited Downloads</p>
          </div>
        </div>
        <div className="main_safeguards_large_background"><DetailsProtection /></div>
      </div>
      <div className="main_swiperPost">
        <SwiperPost/>
      </div>
      <div className="main_post">
        <div className="main_post_title">
          <h3 className="large_h3">{t('post-title_large-h3')}</h3>
          <p className="large_p">{t('post-title_large-p')}</p>
          <h4 className="large_h4">{t('post-title_large-h4')}</h4>
          <h3>{t('latest-blog')}</h3>
          <p>{t('blog-news')}</p>
          <h4>{t('blog-more')}</h4>
        </div>
        <div className="main_post_container">
          {posts.map((post) => (
            <div className="main_postNews" key={post.id}>
              <img src={flag} alt={post.title} />
              <h2>{post.title}</h2>
              <h4>{post.prescription}</h4>
              <button className="main_postNews_learn"onClick={handleClick}>{t('read-more')}</button> 
            </div>
          ))}
        </div>
        <div className="main_post_button"><button className="main_post_button_generate"onClick={handleClick}>{t('read-more')}</button></div>
      </div> 
      <div className="main_detailsblog">
        <DetailsBlog />
      </div>
    </div>
  );
};
export default Generate;