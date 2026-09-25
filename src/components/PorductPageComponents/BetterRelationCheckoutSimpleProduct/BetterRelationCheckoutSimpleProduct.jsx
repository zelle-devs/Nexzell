import React from 'react';
import { ArrowRight, CheckCircle2, Apple } from 'lucide-react';
import './BetterRelationCheckoutSimpleProduct.css';

function BetterRelationCheckoutSimpleProduct() {
    const customerFeatures = [
        "Customer profiles",
        "Purchase history",
        "Segmentation",
        "Communication tools",
        "Customer insights"
    ];

    const paymentFeatures = [
        "Multiple payment methods",
        "Secure transactions",
        "Transaction tracking",
        "Refund support",
        "Payment reporting"
    ];

    return (
        <section className="sectionWrapperBetterRelationCheckoutSimpleProduct">
            <div className="containerBetterRelationCheckoutSimpleProduct">

                <div className="cardMainBetterRelationCheckoutSimpleProduct animFadeUpBetterRelationCheckoutSimpleProduct">
                    <div className="cardLeftPanelBetterRelationCheckoutSimpleProduct">
                         <div className="badgeEverythingBusinessStarter">
            <span className="badgeDotEverythingBusinessStarter"></span>
           CUSTOMERS
          </div>
                        <h2 className="headingBetterRelationCheckoutSimpleProduct">
                            Know Your Customers.<br />
                            Build Better Relationships.
                        </h2>
                        <div className='CustomerRightMainDownFlexDiv'>
                            <div style={{display:'flex', width:'100%'}}>
                                <ul className="featureListBetterRelationCheckoutSimpleProduct">
                                    {customerFeatures.map((feature, index) => (
                                        <li key={index} className="featureItemBetterRelationCheckoutSimpleProduct">
                                            <CheckCircle2
                                                size={18}
                                                className="checkIconBetterRelationCheckoutSimpleProduct"
                                                fill="var(--nexzell-primary, #00E699)"
                                                color="var(--nexzell-bg-base, #06080C)"
                                            />
                                            <span className="featureTextBetterRelationCheckoutSimpleProduct">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="cardRightPanelBetterRelationCheckoutSimpleProduct">
                                <div className="customerWidgetBetterRelationCheckoutSimpleProduct">
                                    <div className="customerWidgetHeaderBetterRelationCheckoutSimpleProduct">
                                        <img
                                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop"
                                            alt="Sarah Ahmed"
                                            className="customerWidgetAvatarBetterRelationCheckoutSimpleProduct"
                                        />
                                        <div className="customerWidgetInfoBetterRelationCheckoutSimpleProduct">
                                            <h4 className="customerWidgetNameBetterRelationCheckoutSimpleProduct">Sarah Ahmed</h4>
                                            <p className="customerWidgetEmailBetterRelationCheckoutSimpleProduct">sarah@company.com</p>
                                        </div>
                                    </div>
                                    <div className="customerWidgetStatsBetterRelationCheckoutSimpleProduct">
                                        <div className="customerWidgetStatBoxBetterRelationCheckoutSimpleProduct">
                                            <p className="customerWidgetStatLabelBetterRelationCheckoutSimpleProduct">Total Orders</p>
                                            <p className="customerWidgetStatValueBetterRelationCheckoutSimpleProduct">12</p>
                                        </div>
                                        <div className="customerWidgetStatBoxBetterRelationCheckoutSimpleProduct">
                                            <p className="customerWidgetStatLabelBetterRelationCheckoutSimpleProduct">Total Spent</p>
                                            <p className="customerWidgetStatValueBetterRelationCheckoutSimpleProduct">$1,284</p>
                                        </div>
                                    </div>
                                    <div className="customerWidgetBadgeBetterRelationCheckoutSimpleProduct">
                                        <CheckCircle2 size={12} strokeWidth={3} /> VIP Customer
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>


                </div>

                <div className="cardMainBetterRelationCheckoutSimpleProduct animFadeUpDelay1BetterRelationCheckoutSimpleProduct">
                    <div className="cardLeftPanelBetterRelationCheckoutSimpleProduct">
                        <div className="badgeEverythingBusinessStarter">
            <span className="badgeDotEverythingBusinessStarter"></span>
           PAYMENTS
          </div>
                        <h2 className="headingBetterRelationCheckoutSimpleProduct">
                            Make Checkout Simple.
                        </h2>
                        <div className='CustomerRightMainDownFlexDiv'>
                            <div style={{display:'flex', width:'100%'}}>
                                <ul className="featureListBetterRelationCheckoutSimpleProduct">
                                    {paymentFeatures.map((feature, index) => (
                                        <li key={index} className="featureItemBetterRelationCheckoutSimpleProduct">
                                            <CheckCircle2
                                                size={18}
                                                className="checkIconBetterRelationCheckoutSimpleProduct"
                                                fill="var(--nexzell-primary, #00E699)"
                                                color="var(--nexzell-bg-base, #06080C)"
                                            />
                                            <span className="featureTextBetterRelationCheckoutSimpleProduct">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className='mainDivRightSectionBettrealtionProductdivCheckout'>
                                <div className="paymentWidgetBetterRelationCheckoutSimpleProduct">
                                <div className="paymentLogoStripeBetterRelationCheckoutSimpleProduct">stripe</div>
                                <div className="paymentLogoPaypalBetterRelationCheckoutSimpleProduct">
                                    <span className="paypalP1BetterRelationCheckoutSimpleProduct">Pay</span>
                                    <span className="paypalP2BetterRelationCheckoutSimpleProduct">Pal</span>
                                </div>
                                <div className="paymentLogoAppleBetterRelationCheckoutSimpleProduct">
                                    <Apple size={20} fill="#FFFFFF" color="#FFFFFF" /> Pay
                                </div>
                                <div className="paymentLogoGoogleBetterRelationCheckoutSimpleProduct">
                                    <span className="googleGBetterRelationCheckoutSimpleProduct">G</span> Pay
                                </div>
                                
                            </div>
                                <button className="btnPrimaryBetterRelationCheckoutSimpleProduct">
                            Explore Payment Integrations <ArrowRight size={16} className="btnIconBetterRelationCheckoutSimpleProduct" />
                        </button>
                            </div>
                            
                            
                        </div>



                    </div>
                               
                      
                </div>
                                    
            </div>
        </section>
    );
}

export default BetterRelationCheckoutSimpleProduct;