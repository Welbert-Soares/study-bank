'use client'

import * as React from 'react'
import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Separator } from '@/components/ui/separator'
import { PRESET_COLORS } from '@/types/plano'
import { cn } from '@/lib/utils'

interface ColorPickerProps {
  value?: string
  onChange: (color: string) => void
  className?: string
}

export function ColorPicker({ value, onChange, className }: ColorPickerProps) {
  const [customColor, setCustomColor] = React.useState(value || '#3DD9B3')

  const handlePresetSelect = (color: string) => {
    onChange(color)
    setCustomColor(color)
  }

  const handleCustomColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const color = e.target.value
    setCustomColor(color)
    onChange(color)
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn('w-full justify-start', className)}
        >
          <div
            className="w-6 h-6 rounded border border-gray-300 mr-2"
            style={{ backgroundColor: value || '#3DD9B3' }}
          />
          <span>Selecionar Cor...</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80" align="start">
        <div className="space-y-4">
          <div>
            <Label className="text-sm font-medium">Cores Predefinidas</Label>
            <div className="grid grid-cols-6 gap-2 mt-2">
              {PRESET_COLORS.map((color) => (
                <button
                  key={color}
                  type="button"
                  className={cn(
                    'w-10 h-10 rounded-md border-2 transition-all hover:scale-110 relative',
                    value === color
                      ? 'border-gray-900 ring-2 ring-offset-2 ring-gray-900'
                      : 'border-gray-200 hover:border-gray-400',
                  )}
                  style={{ backgroundColor: color }}
                  onClick={() => handlePresetSelect(color)}
                  aria-label={`Selecionar cor ${color}`}
                >
                  {value === color && (
                    <Check className="w-5 h-5 text-white absolute inset-0 m-auto drop-shadow-md" />
                  )}
                </button>
              ))}
            </div>
          </div>

          <Separator />

          <div className="space-y-2">
            <Label htmlFor="custom-color" className="text-sm font-medium">
              Cor Personalizada
            </Label>
            <div className="flex gap-2">
              <Input
                id="custom-color"
                type="color"
                value={customColor}
                onChange={handleCustomColorChange}
                className="h-10 w-20 cursor-pointer"
              />
              <Input
                type="text"
                value={customColor}
                onChange={(e) => {
                  const color = e.target.value
                  if (/^#[0-9A-F]{6}$/i.test(color)) {
                    setCustomColor(color)
                    onChange(color)
                  }
                }}
                placeholder="#3DD9B3"
                className="flex-1 font-mono text-sm"
              />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
