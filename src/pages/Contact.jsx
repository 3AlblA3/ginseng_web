import React, { useState, useRef } from 'react';
import { Link } from "react-router-dom";
import emailjs from '@emailjs/browser';
import './elements.css'
import ReCAPTCHA from 'react-google-recaptcha';

function Contact() {

    //set captcha

    const [captchaValue, setCaptchaValue] = useState(null);
    const recaptchaRef = useRef();

    const handleCaptchaChange = (value) => {
        setCaptchaValue(value);
    };

    const apiKey = import.meta.env.VITE_API_KEY;
    const serviceId = import.meta.env.VITE_SERVICE_ID;
    const templateId = import.meta.env.VITE_TEMPLATE_ID;

    //set all values

    const [typeProjet, setTypeProjet] = useState('');
    const [client, setClient] = useState('');
    const [projet, setProjet] = useState('');
    const [prenom, setPrenom] = useState('');
    const [nom, setNom] = useState('');
    const [email, setEmail] = useState('');
    const [telephone, setTelephone] = useState('');
    const [lien, setLien] = useState('');
    const [societe, setSociete] = useState('');
    const [role, setRole] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [formErrors, setFormErrors] = useState({});

    const form = useRef();

    // Set Form errors

    const validateForm = () => {
        const errors = {};
        const nameRegex = /^[a-zA-ZÀ-ÖØ-öø-ÿ-]+$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^[0-9]{10}$/;  
      
        if (!nameRegex.test(nom)) errors.nom = 'Le nom ne doit contenir que des lettres et des tirets.';
        if (!nameRegex.test(prenom)) errors.prenom = 'Le prénom ne doit contenir que des lettres et des tirets.';
        if (!emailRegex.test(email)) errors.email = 'Veuillez entrer une adresse e-mail valide.';
        if (!projet.trim()) errors.projet = 'Veuillez détailler votre projet.';
        if (telephone && !phoneRegex.test(telephone)) errors.telephone = 'Veuillez entrer un numéro de téléphone valide (10 chiffres).';
      
        setFormErrors(errors);
        return Object.keys(errors).length === 0;
      };
    
      //Envoie du formulaire par mail

    const sendEmail = (e) => {
        e.preventDefault();

        if (!captchaValue) {
            alert("Please complete the CAPTCHA");
            return;
        }

        if (!validateForm()) {
            return;
        }

        setIsLoading(true);

        //Envoie du mail via emailJS

        emailjs.sendForm(
            import.meta.env.VITE_SERVICE_ID,
            import.meta.env.VITE_TEMPLATE_ID,
            form.current,
            import.meta.env.VITE_API_KEY
          )
            .then((result) => {
                console.log('Email sent successfully:', result.text);
                alert('Votre message a été envoyé avec succès!');
                // Reset form fields here
                setTypeProjet('');
                setClient('');
                setProjet('');
                setPrenom('');
                setNom('');
                setEmail('');
                setTelephone('');
                setLien('');
                setSociete('');
                setRole('');
                recaptchaRef.current.reset(); // Reset CAPTCHA
                setCaptchaValue(null);
            }, (error) => {
                console.log('Failed to send email:', error.text);
                alert('Une erreur est survenue lors de l\'envoi du message. Veuillez réessayer.');
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    return (
        <>
            <section className='banner__intro'>
                <div className='banner__intro__container'>
                    <h4>Contactez-nous</h4>
                    <h2>Les beaux projets commencent toujours par un échange</h2>
                </div>
            </section>
            <section className='form__background'>
                <div className='form__title'>
                    <h3>Une idée de projet?</h3>
                    <h5>Nous serons ravis de vous accompagner dans la rédaction d'un cahier des charges (AMOE), pour le suivi et le développement de votre projet web (AMOA) ou pour la réalisation d'un audit.</h5>
                </div>
                <form ref={form} onSubmit={sendEmail} id='form' className='form__container'>
                    <div className='form__row'>
                        <div className='form__row__group'>
                            <label htmlFor="typeProjet">Que pouvons-nous faire pour vous ?*</label>
                            <select name="typeProjet" id="typeProjet" value={typeProjet} onChange={(e) => setTypeProjet(e.target.value)} required>
                                <option value="AMOE">Vous accompagner avant le projet (AMOE)</option>
                                <option value="AMOA">Vous accompagner pendant le projet (AMOA)</option>
                                <option value="audit">Réaliser un audit</option>
                                <option value="methodologie">Echanger sur notre offre et notre méthodologie</option>
                                <option value="question">Répondre à vos questions</option>
                                <option value="devis">Vous transmettre un devis</option>
                                <option value="discuter">Discuter d'un éventuel projet</option>
                            </select>
                        </div>
                        <div className='form__row__group'>
                            <label htmlFor="client">Type de client</label>
                            <select name="client" id="client" value={client} onChange={(e) => setClient(e.target.value)} required>
                                <option value="autre">Autre</option>
                                <option value="federation">Fédération</option>
                                <option value="association">Association</option>
                                <option value="public">Etat ou organisme public</option>
                                <option value="edition">Edition</option>
                                <option value="prive">Entreprise privée</option>
                            </select>
                        </div>
                    </div>
                        <label htmlFor="projet">Détaillez nous votre projet*</label>
                        <textarea id='projet' name='projet' value={projet} onChange={(e) => setProjet(e.target.value)} required/>
                        {formErrors.projet && <span className="error">{formErrors.projet}</span>}
                    <div className='form__row'>
                        <div className='form__row__group'>
                            <label htmlFor="prenom">Votre prénom*</label>
                            <input type="text" name='prenom' id='prenom' value={prenom} onChange={(e) => setPrenom(e.target.value)} required/>
                            {formErrors.prenom && <span className="error">{formErrors.prenom}</span>}
                        </div>
                        <div className='form__row__group'>
                            <label htmlFor="nom">Votre nom*</label>
                            <input type="text" name='nom' id='nom' value={nom} onChange={(e) => setNom(e.target.value)} required />
                            {formErrors.nom && <span className="error">{formErrors.nom}</span>}
                        </div>
                    </div>
                        <label htmlFor="email">Votre adresse mail*</label>
                        <input type="email" id='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} required/>
                        {formErrors.email && <span className="error">{formErrors.email}</span>}
                    <div className='form__row'>
                        <div className='form__row__group'>
                            <label htmlFor="telephone">Votre numéro de téléphone</label>
                            <input type="tel" name='telephone' id='telephone' value={telephone} onChange={(e) => {
                                const re = /^[0-9+\-\s()]*$/;
                                if (re.test(e.target.value)) {
                                    setTelephone(e.target.value);
                                    }
                                }}/>
                        </div>
                        <div className='form__row__group'>
                            <label htmlFor="lien">Lien vers votre site existant</label>
                            <input type="text" name='lien' id='lien' value={lien} onChange={(e) => setLien(e.target.value)}/>
                        </div>
                    </div>
                    <div className='form__row'>
                        <div className='form__row__group'>
                            <label htmlFor="societe">Votre société</label>
                            <input type="text" name='societe' id='societe' value={societe} onChange={(e) => setSociete(e.target.value)}/>
                        </div>
                        <div className='form__row__group'>
                            <label htmlFor="role">Votre rôle sur ce projet</label>
                            <input type="text" name='role' id='role' value={role} onChange={(e) => setRole(e.target.value)}/>
                        </div>
                    </div>
                    <ReCAPTCHA ref={recaptchaRef} sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                        onChange={handleCaptchaChange} className='recaptcha-container'/>
                    <button type='submit' disabled={isLoading}  className="button__blue">
                        {isLoading ? 'Envoi en cours...' : 'Envoyez votre message à Ginseng Web'}
                    </button>
                </form>
            </section>
            <section className='accueil__section__contact'>   
                <div className='accueil__section__contact__container'>
                    <h3>Prévoir un rendez-vous!</h3>
                    <h4></h4>
                    <Link to='/contact' className='button__blue'>Planifier un rendez-vous</Link>
                </div>
            </section>
        </>
    );
}

export default Contact;