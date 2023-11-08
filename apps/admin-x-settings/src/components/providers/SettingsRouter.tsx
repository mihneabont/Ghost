import React, {useEffect} from 'react';
import {useModalPaths, useRouteChangeCallback, useRouting} from '@tryghost/admin-x-framework';
import {useScrollSectionContext} from '../../hooks/useScrollSection';
import type {ModalName} from './routing/modals';

const modalPaths: {[key: string]: ModalName} = {
    'design/change-theme': 'DesignAndThemeModal',
    'design/edit': 'DesignAndThemeModal',
    // this is a special route, because it can install a theme directly from the Ghost Marketplace
    'design/change-theme/install': 'DesignAndThemeModal',
    'navigation/edit': 'NavigationModal',
    'staff/invite': 'InviteUserModal',
    'staff/:slug': 'UserDetailModal',
    'portal/edit': 'PortalModal',
    'tiers/add': 'TierDetailModal',
    'tiers/:id': 'TierDetailModal',
    'stripe-connect': 'StripeConnectModal',
    'newsletters/new': 'AddNewsletterModal',
    'newsletters/:id': 'NewsletterDetailModal',
    'history/view': 'HistoryModal',
    'history/view/:user': 'HistoryModal',
    'integrations/zapier': 'ZapierModal',
    'integrations/slack': 'SlackModal',
    'integrations/amp': 'AmpModal',
    'integrations/unsplash': 'UnsplashModal',
    'integrations/firstpromoter': 'FirstpromoterModal',
    'integrations/pintura': 'PinturaModal',
    'integrations/new': 'AddIntegrationModal',
    'integrations/:id': 'CustomIntegrationModal',
    'recommendations/add': 'AddRecommendationModal',
    'recommendations/edit': 'EditRecommendationModal',
    'announcement-bar/edit': 'AnnouncementBarModal',
    'embed-signup-form/show': 'EmbedSignupFormModal',
    'offers/edit': 'OffersModal',
    'offers/new': 'AddOfferModal',
    'offers/:id': 'EditOfferModal',
    about: 'AboutModal'
};

const SettingsRouter: React.FC = () => {
    const {updateNavigatedSection, scrollToSection} = useScrollSectionContext();
    const {route} = useRouting();

    useModalPaths(() => import('./routing/modals'), modalPaths);

    useRouteChangeCallback((newPath, oldPath) => {
        if (newPath === oldPath) {
            scrollToSection(newPath.split('/')[0]);
        }
    });

    useEffect(() => {
        if (route !== undefined) {
            updateNavigatedSection(route.split('/')[0]);
        }
    }, [route, updateNavigatedSection]);

    return null;
};

export default SettingsRouter;
