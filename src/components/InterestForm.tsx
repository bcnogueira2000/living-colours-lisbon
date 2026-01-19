import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
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
  const [formData, setFormData] = useState({
    name: '',
    nationality: '',
    email: '',
    phone: '',
    moveIn: '',
    stay: '',
    room: '',
    about: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to a backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  const handleClose = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      nationality: '',
      email: '',
      phone: '',
      moveIn: '',
      stay: '',
      room: '',
      about: '',
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
                <Label htmlFor="moveIn">{t('form.movein')}</Label>
                <Input
                  id="moveIn"
                  type="date"
                  required
                  value={formData.moveIn}
                  onChange={(e) => setFormData({ ...formData, moveIn: e.target.value })}
                  className="bg-background"
                />
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

              <p className="text-xs text-muted-foreground">{t('form.privacy')}</p>

              <Button type="submit" variant="hero" size="lg" className="w-full">
                {t('form.submit')}
              </Button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
