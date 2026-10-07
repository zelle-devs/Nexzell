import React from 'react';
import { ArrowRight, CheckCircle2, Apple } from 'lucide-react';
import './WhatsWorkingAutomateWork.css';
import { img } from 'framer-motion/client';

function WhatsWorkingAutomateWork() {
    const customerFeatures = [
        "Sales and Revenue insights",
        "Customer Analytics",
        "Product Performance",
        "Marketing Performance",
        "Real-Time Dashboard"
    ];

    const paymentFeatures = [
        "Automated Workflows",
        "Inventory Alerts",
        "Order Notifications",
        "Customer Notifications",
        "Task Management",
        
    ];

    return (
        <section className="sectionWrapperWhatsWorkingAutomateWork">
            <div className="containerWhatsWorkingAutomateWork">

                <div className="cardMainWhatsWorkingAutomateWork animFadeUpWhatsWorkingAutomateWork">
                    <div className="cardLeftPanelWhatsWorkingAutomateWork">
                        <div className="badgeEverythingBusinessStarter">
                            <span className="badgeDotEverythingBusinessStarter"></span>
                            CUSTOMERS
                        </div>
                        <h2 className="headingWhatsWorkingAutomateWork">
                            Know Your Customers.<br/>
                            Build Better Relationships.
                        </h2>
                        <div className='CustomerRightMainDownFlexDiv'>
                            <div style={{ display: 'flex', width: '100%' }}>
                                <ul className="featureListWhatsWorkingAutomateWork">
                                    {customerFeatures.map((feature, index) => (
                                        <li key={index} className="featureItemWhatsWorkingAutomateWork">
                                            <CheckCircle2
                                                size={18}
                                                className="checkIconWhatsWorkingAutomateWork"
                                                fill="var(--nexzell-primary, #00E699)"
                                                color="var(--nexzell-bg-base, #06080C)"
                                            />
                                            <span className="featureTextWhatsWorkingAutomateWork">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="cardRightPanelWhatsWorkingAutomateWork">
                                {/* <div className="customerWidgetWhatsWorkingAutomateWork">
                                    <div className="customerWidgetHeaderWhatsWorkingAutomateWork">
                                        <img
                                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop"
                                            alt="Sarah Ahmed"
                                            className="customerWidgetAvatarWhatsWorkingAutomateWork"
                                        />
                                        <div className="customerWidgetInfoWhatsWorkingAutomateWork">
                                            <h4 className="customerWidgetNameWhatsWorkingAutomateWork">Sarah Ahmed</h4>
                                            <p className="customerWidgetEmailWhatsWorkingAutomateWork">sarah@company.com</p>
                                        </div>
                                    </div>
                                    <div className="customerWidgetStatsWhatsWorkingAutomateWork">
                                        <div className="customerWidgetStatBoxWhatsWorkingAutomateWork">
                                            <p className="customerWidgetStatLabelWhatsWorkingAutomateWork">Total Orders</p>
                                            <p className="customerWidgetStatValueWhatsWorkingAutomateWork">12</p>
                                        </div>
                                        <div className="customerWidgetStatBoxWhatsWorkingAutomateWork">
                                            <p className="customerWidgetStatLabelWhatsWorkingAutomateWork">Total Spent</p>
                                            <p className="customerWidgetStatValueWhatsWorkingAutomateWork">$1,284</p>
                                        </div>
                                    </div>
                                    <div className="customerWidgetBadgeWhatsWorkingAutomateWork">
                                        <CheckCircle2 size={12} strokeWidth={3} /> VIP Customer
                                    </div>
                                </div> */}
                                <img src='/WhatsWorkingAutomateWork1.png' alt="" />
                            </div>
                        </div>


                    </div>


                </div>

                <div className="cardMainWhatsWorkingAutomateWork animFadeUpDelay1WhatsWorkingAutomateWork">
                    <div className="cardLeftPanelWhatsWorkingAutomateWork">
                        <div className="badgeEverythingBusinessStarter">
                            <span className="badgeDotEverythingBusinessStarter"></span>
                            PAYMENTS
                        </div>
                        <h2 className="headingWhatsWorkingAutomateWork">
                            Make Checkout Simple.
                        </h2>
                        <div className='CustomerRightMainDownFlexDiv'>
                            <div style={{ display: 'flex', width: '100%' }}>
                                <ul className="featureListWhatsWorkingAutomateWork">
                                    {paymentFeatures.map((feature, index) => (
                                        <li key={index} className="featureItemWhatsWorkingAutomateWork">
                                            <CheckCircle2
                                                size={18}
                                                className="checkIconWhatsWorkingAutomateWork"
                                                fill="var(--nexzell-primary, #00E699)"
                                                color="var(--nexzell-bg-base, #06080C)"
                                            />
                                            <span className="featureTextWhatsWorkingAutomateWork">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className='mainDivRightSectionBettrealtionProductdivCheckout'>
                                {/* <div className="paymentWidgetWhatsWorkingAutomateWork">
                                    <div className="paymentLogoStripeWhatsWorkingAutomateWork">stripe</div>
                                    <div className="paymentLogoPaypalWhatsWorkingAutomateWork">
                                        <span className="paypalP1WhatsWorkingAutomateWork">Pay</span>
                                        <span className="paypalP2WhatsWorkingAutomateWork">Pal</span>
                                    </div>
                                    <div className="paymentLogoAppleWhatsWorkingAutomateWork">
                                        <Apple size={20} fill="#FFFFFF" color="#FFFFFF" /> Pay
                                    </div>
                                    <div className="paymentLogoGoogleWhatsWorkingAutomateWork">
                                        <span className="googleGWhatsWorkingAutomateWork">G</span> Pay
                                    </div>

                                </div>
                                <button className="btnPrimaryWhatsWorkingAutomateWork">
                                    Explore Payment Integrations <ArrowRight size={16} className="btnIconWhatsWorkingAutomateWork" />
                                </button> */}
                                <img src="/WhatsWorkingAutomateWork2.png" alt="" />
                            </div>


                        </div>



                    </div>


                </div>

            </div>
        </section>
    );
}

export default WhatsWorkingAutomateWork;