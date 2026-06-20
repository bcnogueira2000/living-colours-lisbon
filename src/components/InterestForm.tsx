import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { X, CheckCircle } from 'lucide-react';

interface InterestFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export function InterestForm({ isOpen, onClose }: InterestFormProps) {
  const { t } = useLanguage();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    nationality: '',
    email: '',
    phone: '',
    arrivalWindow: '',
    referralSource: '',
    stay: '',
    room: '',
    about: '',
    consent: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) return;
    setIsSubmitting(true);
    const { error } = await supabase.from('interest_submissions').insert({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      nationality: formData.nationality,
      arrival_window: formData.arrivalWindow,
      referral_source: formData.referralSource,
      stay_duration: formData.stay || null,
      motivation: formData.about || null,
      preferred_room: formData.room || null,
      consent_given: formData.consent,
    });
    setIsSubmitting(false);
    if (error) {
      console.error('Interest form submission error:', error);
      toast.error(t('form.error'));
      return;
    }
    setIsSubmitted(true);
  };

  const handleClose = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      nationality: '',
      email: '',
      phone: '',
      arrivalWindow: '',
      referralSource: '',
      stay: '',
      room: '',
      about: '',
      consent: false,
    });
    onClose();
  };

  const roomTypes = ['rooms.smart', 'rooms.standard', 'rooms.premium', 'rooms.suite', 'rooms.master'];

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto bg-background border-border">
        <DialogHeader className="relative">
          <DialogTitle className="font-display text-2xl font-medium pr-8">
            {t('form.title')}
          </DialogTitle>
          <button
            onClick={handleClose}
            className="absolute right-0 top-0 p-1 text-muted-foreground hover:text-foreground transition-colors"
          >
            <X size={20} />
          </button>
        </DialogHeader>

        {isSubmitted ? (
          <div className="py-12 text-center">
            <CheckCircle className="w-16 h-16 text-sage mx-auto mb-6" />
            <p className="text-lg text-foreground mb-2">{t('form.success')}</p>
          </div>
        ) : (
          <>
            <p className="text-muted-foreground mb-6">{t('form.subtitle')}</p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">{t('form.name')}</Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-background"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="nationality">{t('form.nationality')}</Label>
                  <Input
                    id="nationality"
                    required
                    value={formData.nationality}
                    onChange={(e) => setFormData({ ...formData, nationality: e.target.value })}
                    className="bg-background"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">{t('form.email')}</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-background"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">{t('form.phone')}</Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-background"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label>{t('form.arrivalWindow')}</Label>
                <Select
                  required
                  value={formData.arrivalWindow}
                  onValueChange={(value) => setFormData({ ...formData, arrivalWindow: value })}
                >
                  <SelectTrigger className="bg-background">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="july-2026">{t('form.arrivalWindow.july')}</SelectItem>
                    <SelectItem value="august-2026">{t('form.arrivalWindow.august')}</SelectItem>
                    <SelectItem value="september-2026">{t('form.arrivalWindow.september')}</SelectItem>
                    <SelectItem value="october-2026-plus">{t('form.arrivalWindow.octoberPlus')}</SelectItem>
                    <SelectItem value="not-sure">{t('form.arrivalWindow.notSure')}</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>{t('form.referral')}</Label>
                <Select
                  required
                  value={formData.referralSource}
                  onValueChange={(value) => setFormData({ ...formData, referralSource: value })}
                >
                  <SelectTrigger className="bg-background">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="instagram">{t('form.referral.instagram')}</SelectItem>
                    <SelectItem value="recommendation">{t('form.referral.recommendation')}</SelectItem>
                    <SelectItem value="google">{t('form.referral.google')}</SelectItem>
                    <SelectItem value="other">{t('form.referral.other')}</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>{t('form.stay')}</Label>
                  <Select
                    value={formData.stay}
                    onValueChange={(value) => setFormData({ ...formData, stay: value })}
                  >
                    <SelectTrigger className="bg-background">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="3-6">{t('form.stay.3-6')}</SelectItem>
                      <SelectItem value="6-12">{t('form.stay.6-12')}</SelectItem>
                      <SelectItem value="12+">{t('form.stay.12+')}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>{t('form.room')}</Label>
                  <Select
                    value={formData.room}
                    onValueChange={(value) => setFormData({ ...formData, room: value })}
                  >
                    <SelectTrigger className="bg-background">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="any">{t('form.room.any')}</SelectItem>
                      {roomTypes.map((room) => (
                        <SelectItem key={room} value={room}>
                          {t(room)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="about">{t('form.about')}</Label>
                <Textarea
                  id="about"
                  placeholder={t('form.about.placeholder')}
                  rows={4}
                  value={formData.about}
                  onChange={(e) => setFormData({ ...formData, about: e.target.value })}
                  className="bg-background resize-none"
                />
              </div>

              <div className="flex items-start gap-3">
                <Checkbox
                  id="consent"
                  checked={formData.consent}
                  onCheckedChange={(checked) =>
                    setFormData({ ...formData, consent: checked === true })
                  }
                  className="mt-1"
                />
                <Label
                  htmlFor="consent"
                  className="text-xs text-muted-foreground leading-relaxed font-normal cursor-pointer"
                >
                  {t('form.consent')}
                </Label>
              </div>

              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full"
                disabled={!formData.consent || isSubmitting}
              >
                {t('form.submit')}
              </Button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
